package online.javatastic.backendcompiler;
import com.fasterxml.jackson.databind.util.JSONPObject;
import jakarta.validation.Valid;
import netscape.javascript.JSObject;
import online.javatastic.backendcompiler.result.CompilationResult;
import online.javatastic.backendcompiler.result.Result;
import online.javatastic.backendcompiler.result.TestResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CodeController {
    @Autowired
    private CodeService codeService;
    private TestResult[] testResults;

    @PostMapping("/submit")
    public ResponseEntity<CompilationResult> submit(@RequestBody @Valid UserCode userCode) throws IOException, InterruptedException {
        codeService.store(userCode);
        CompilationResult compilationResult = codeService.compile();
        if (compilationResult.isSuccess()) {
            List<TestResult> resultList = codeService.run();
            testResults = resultList.toArray(new TestResult[resultList.size()]);
        }
        return ResponseEntity.ok(compilationResult);
    }

    @GetMapping("/results")
    @ResponseBody
    public ResponseEntity<TestResult[]> getTestResults() throws Exception {
        //Upon get request, Save TestCase List with Results in a JSON to give to client
        if (testResults == null) {
            System.out.println("FAILED TO OBTAIN TEST RESULTS");
            return ResponseEntity.notFound().build();
        } else {
            System.out.println("SUCCESSFULLY OBTAINED TEST RESULTS");
            for (TestResult testResult: testResults) {
                System.out.println(testResult.getTestCase().getInputList().toString());
                //System.out.println(((Integer) testResult.getTestCase().getExpectedOutput()));
                System.out.println(testResult.getOutput());
                System.out.println(testResult.isSuccess());
            }
            return ResponseEntity.ok(testResults);
        }
    }
}
package online.javatastic.backendcompiler;
import jakarta.validation.Valid;
import online.javatastic.backendcompiler.result.CompilationResult;
import online.javatastic.backendcompiler.result.Result;
import online.javatastic.backendcompiler.result.TestResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class CodeController {
    @Autowired
    private CodeService codeService;
    private TestResult[] testResults;
    private String result;

    @PostMapping("/submit")
    public ResponseEntity<CompilationResult> submit(@RequestBody @Valid UserCode userCode) throws IOException, InterruptedException {
        codeService.store(userCode);
        CompilationResult compilationResult = codeService.compile();
        if (compilationResult.isSuccess()) {
            List<TestResult> resultList = codeService.runTests();
            testResults = resultList.toArray(new TestResult[resultList.size()]);
        }
        return ResponseEntity.ok(compilationResult);
    }

    @PostMapping("/run")
    public ResponseEntity<CompilationResult> runCode(@RequestBody @Valid UserCode userCode) throws IOException, InterruptedException {
        codeService.store(userCode);
        CompilationResult compilationResult = codeService.compile();
        if (compilationResult.isSuccess()) {
            this.result = codeService.run();
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
            return ResponseEntity.ok(testResults);
        }
    }

    @GetMapping("/output")
    @ResponseBody
    public ResponseEntity<String> getOutput() throws Exception {
        //Upon get request, Save TestCase List with Results in a JSON to give to client
        return ResponseEntity.ok(result);
    }
}
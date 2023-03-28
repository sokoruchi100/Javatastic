package online.javatastic.backendcompiler;
import online.javatastic.backendcompiler.exercise.Exercise;
import online.javatastic.backendcompiler.exercise.ExerciseService;
import online.javatastic.backendcompiler.result.CompilationResult;
import online.javatastic.backendcompiler.result.Result;
import online.javatastic.backendcompiler.result.TestResult;
import online.javatastic.backendcompiler.testcase.TestCase;
import online.javatastic.backendcompiler.util.JavaCompilerUtil;
import online.javatastic.backendcompiler.util.JavaTesterUtil;
import online.javatastic.backendcompiler.util.JavaWriterUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class CodeService {
    @Autowired
    private ExerciseService exerciseService;
    private String code;
    private Exercise exercise;
    private Path tempDir;


    public void store(UserCode userCode) throws IOException {
        this.code = userCode.getCode();
        Long exerciseId = userCode.getExerciseId();
        this.exercise = exerciseService.getExerciseById(exerciseId);
    }

    public CompilationResult compile() throws IOException {
        String fileName = this.exercise.getFileName();

        //Creating Temp Files
        this.tempDir = JavaWriterUtil.createDir();
        File file = JavaWriterUtil.write(this.code, fileName, this.tempDir);

        //Compiling Code
        CompilationResult compilationResult = JavaCompilerUtil.compile(file);
        System.out.println("COMPILATION SUCCESS: "+compilationResult.isSuccess());
        System.out.println("COMPILATION OUTPUT: "+compilationResult.getOutput());

        //Deletion
        JavaWriterUtil.recursiveDeleteOnExit(tempDir);
        return compilationResult;
    }

    public List<TestResult> run() throws IOException, InterruptedException {
        List<TestCase> testCaseList = this.exercise.getTestCases();

        //Running Tests to return their results
        List<TestResult> testResultList = new ArrayList<>();
        testResultList = JavaTesterUtil.runTests(this.exercise, this.tempDir);
        //Test
        testResultList.forEach(testResult -> System.out.println("TEST RESULT OUTPUT: "+testResult.getOutput()));
        //Add
        return testResultList;
    }
}
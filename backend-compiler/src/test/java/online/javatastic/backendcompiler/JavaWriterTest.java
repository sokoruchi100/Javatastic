package online.javatastic.backendcompiler;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.List;

import online.javatastic.backendcompiler.exercise.Exercise;
import online.javatastic.backendcompiler.exercise.ExerciseRepository;
import online.javatastic.backendcompiler.exercise.ExerciseService;
import online.javatastic.backendcompiler.result.CompilationResult;
import online.javatastic.backendcompiler.result.TestResult;
import online.javatastic.backendcompiler.testcase.TestCase;
import online.javatastic.backendcompiler.util.JavaCompilerUtil;
import online.javatastic.backendcompiler.util.JavaTesterUtil;
import online.javatastic.backendcompiler.util.JavaWriterUtil;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.junit.Assert.*;

public class JavaWriterTest {
    private static final String TEST_PATH = "src/main/java/online/javatastic/backendcompiler/temp/";


    @Test
    public void testWrite() throws IOException {
    }
}

package online.javatastic.backendcompiler.util;

import online.javatastic.backendcompiler.result.CompilationResult;

import javax.tools.JavaCompiler;
import javax.tools.ToolProvider;
import java.io.*;

public class JavaCompilerUtil {

    public static CompilationResult compile(File javaFile) throws IOException {
        String className = javaFile.getName().substring(0, javaFile.getName().length()-5);
        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        ByteArrayOutputStream err = new ByteArrayOutputStream();
        int result = compiler.run(null, out, err, javaFile.getAbsolutePath());
        boolean success = result == 0;
        String output = out.toString();
        String error = err.toString();
        if (!success) {
            return new CompilationResult(error, false);
        } else {
            return new CompilationResult(output, true, className);
        }
    }
}
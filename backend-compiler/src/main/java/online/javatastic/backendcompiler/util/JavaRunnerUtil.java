package online.javatastic.backendcompiler.util;

import java.io.*;


public class JavaRunnerUtil {
    public static String run(String tempDir) throws IOException, InterruptedException {
        // Construct the command to run the Java class
        String[] command = {"java", "-cp", tempDir, "Main"};
        Process process = Runtime.getRuntime().exec(command);
        OutputStream stdin = process.getOutputStream();
        InputStream stdout = process.getInputStream();
        InputStream stderr = process.getErrorStream();

        // Read output and error messages
        BufferedReader outputReader = new BufferedReader(new InputStreamReader(stdout));
        BufferedReader errorReader = new BufferedReader(new InputStreamReader(stderr));
        StringBuilder outputBuilder = new StringBuilder();
        StringBuilder errorBuilder = new StringBuilder();
        String line;
        while ((line = outputReader.readLine()) != null) {
            outputBuilder.append(line).append("\n");
        }
        while ((line = errorReader.readLine()) != null) {
            errorBuilder.append(line).append("\n");
        }
        outputReader.close();
        errorReader.close();

        // Wait for the process to finish and get exit code
        int exitCode = process.waitFor();

        // Check for errors and return output or error message
        if (exitCode == 0) {
            return outputBuilder.toString();
        } else {
            return errorBuilder.toString();
        }
    }
}


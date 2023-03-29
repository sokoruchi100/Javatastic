package online.javatastic.backendcompiler.util;

import online.javatastic.backendcompiler.exercise.Exercise;
import online.javatastic.backendcompiler.result.TestResult;
import online.javatastic.backendcompiler.testcase.TestCase;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;


public class JavaTesterUtil {
    public static List<TestResult> runTests(Exercise exercise, Path tempDir) {
        System.out.println("RUNNING TESTS");
        List<TestResult> results = new ArrayList<>();
        List<TestCase> testCaseList = exercise.getTestCases();
        String packageName = tempDir.toString().substring(14).replace('\\', '.');

        try {
            // Load the class by its name
            URLClassLoader classLoader = URLClassLoader.newInstance(new URL[] { tempDir.toUri().toURL() });
            Class<?> clazz = Class.forName(exercise.getFileName(), true, classLoader);

            Object[] args = testCaseList.get(0).getInputList().toArray();
            Class<?>[] paramTypes = new Class<?>[args.length];
            for (int i = 0; i < args.length; i++) {
                Class<?> argClass = args[i].getClass();
                if (argClass.isAssignableFrom(Integer.class)) {
                    paramTypes[i] = int.class;
                    args[i] = ((Integer) args[i]).intValue();
                } else if (argClass.isAssignableFrom(Double.class)) {
                    paramTypes[i] = double.class;
                    args[i] = ((Double) args[i]).doubleValue();
                } else if (argClass.isAssignableFrom(Boolean.class)) {
                    paramTypes[i] = boolean.class;
                    args[i] = ((Boolean) args[i]).booleanValue();
                } else {
                    paramTypes[i] = argClass;
                }
            }

            // Get a method from the class by its name and parameter types
            Method method = clazz.getDeclaredMethod(exercise.getMethod(), paramTypes);

            // Invoke the method on an instance of the class
            Object obj = clazz.newInstance();

            for (TestCase testCase : testCaseList) {
                System.out.println("EXPECTED OUTPUT: "+new String((byte[]) testCase.getExpectedOutput()));
                String outputString = new String((byte[]) testCase.getExpectedOutput());
                TestResult result = new TestResult();
                try {
                    result.setOutput(method.invoke(obj, testCase.getInputList().toArray()));
                    System.out.println("RESULT OUTPUT: "+result.getOutput());
                    if (result.getOutput().getClass().isAssignableFrom(Integer.class)) {
                        testCase.setExpectedOutput(Integer.parseInt(outputString));
                        result.setSuccess(result.getOutput().equals(testCase.getExpectedOutput()));
                    } else if (result.getOutput().getClass().isAssignableFrom(Double.class)) {
                        testCase.setExpectedOutput(Double.parseDouble(outputString));
                        result.setSuccess(result.getOutput().equals(testCase.getExpectedOutput()));
                    } else if (result.getOutput().getClass().isAssignableFrom(Boolean.class)) {
                        testCase.setExpectedOutput(Boolean.parseBoolean(outputString));
                        result.setSuccess(result.getOutput().equals(testCase.getExpectedOutput()));
                    } else {
                        testCase.setExpectedOutput(outputString);
                        result.setSuccess(result.getOutput().equals(testCase.getExpectedOutput()));
                    }
                } catch (InvocationTargetException ex) {
                    result.setSuccess(false);
                    result.setOutput(ex.getCause().getMessage());
                } catch (IllegalAccessException | IllegalArgumentException ex) {
                    result.setSuccess(false);
                    result.setOutput(ex.getMessage());
                }
                result.setTestCase(testCase);
                results.add(result);
            }
        } catch (InstantiationException | IllegalAccessException | ClassNotFoundException
                 | NoSuchMethodException | SecurityException ex) {
            results.add(new TestResult(ex.toString(), false));
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
        return results;
    }
}


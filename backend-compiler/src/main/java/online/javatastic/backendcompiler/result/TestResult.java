package online.javatastic.backendcompiler.result;

import online.javatastic.backendcompiler.testcase.TestCase;

public class TestResult extends Result {
    private TestCase testCase;

    public TestResult() {
        super();
    }

    public TestResult(Object output, boolean success, TestCase testCase) {
        super(output, success);
        this.testCase = testCase;
    }

    public TestResult(Object output, boolean success) {
        super(output, success);
    }

    public TestCase getTestCase() {
        return testCase;
    }

    public void setTestCase(TestCase testCase) {
        this.testCase = testCase;
    }
}
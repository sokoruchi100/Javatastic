package online.javatastic.backendcompiler.result;

import online.javatastic.backendcompiler.testcase.TestCase;

public abstract class Result {
    private boolean success;
    private Object output;

    public Result() {}
    public Result(Object output, boolean success) {
        this.output = output;
        this.success = success;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Object getOutput() {
        return output;
    }

    public void setOutput(Object output) {
        this.output = output;
    }
}

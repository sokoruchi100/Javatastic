package online.javatastic.backendcompiler.result;

public class CompilationResult extends Result {
    private String className;

    public CompilationResult() {}
    public CompilationResult(String output, boolean success, String className) {
        super(output, success);
        this.className = className;
    }

    public CompilationResult(String error, boolean success) {
        super(error, success);
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }
}

package online.javatastic.backendcompiler;
import org.springframework.stereotype.Component;

@Component
public class UserCode {

    private String code;

    private Long exerciseId;

    public UserCode() {}

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Long getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(Long exerciseId) {
        this.exerciseId = exerciseId;
    }
}
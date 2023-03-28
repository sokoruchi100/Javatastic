package online.javatastic.backendcompiler.testcase;
import jakarta.persistence.*;
import online.javatastic.backendcompiler.exercise.Exercise;

import java.util.List;

@Entity
@Table(name = "test_case")
public class TestCase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Lob
    @Column(name = "input_list", columnDefinition = "BLOB")
    private List<Object> inputList;
    @Lob
    @Column(name = "expected_output", columnDefinition = "BLOB")
    private Object expectedOutput;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;

    public TestCase() {}

    public TestCase(List<Object> inputList, Object expectedOutput, Exercise exercise) {
        this.inputList = inputList;
        this.expectedOutput = expectedOutput;
        this.exercise = exercise;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Object> getInputList() {
        return inputList;
    }

    public void setInputList(List<Object> inputList) {
        this.inputList = inputList;
    }

    public Object getInput() {
        return this.inputList.get(0);
    }

    public Object getInput(int index) {
        return this.inputList.get(index);
    }

    public void setInput(Object input) {
        this.inputList.set(0, input);
    }

    public void setInput(int index, Object input) {
        this.inputList.set(index, input);
    }

    public Object getExpectedOutput() {
        return expectedOutput;
    }

    public void setExpectedOutput(Object expectedOutput) {
        this.expectedOutput = expectedOutput;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }
}
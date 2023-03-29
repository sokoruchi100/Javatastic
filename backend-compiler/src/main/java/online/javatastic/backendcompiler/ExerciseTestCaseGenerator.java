package online.javatastic.backendcompiler;

import online.javatastic.backendcompiler.exercise.Exercise;
import online.javatastic.backendcompiler.exercise.ExerciseService;
import online.javatastic.backendcompiler.testcase.TestCase;
import online.javatastic.backendcompiler.testcase.TestCaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class ExerciseTestCaseGenerator {
    @Autowired
    private ExerciseService exerciseService;
    @Autowired
    private TestCaseService testCaseService;

    public void generateExercisesAndTestCases() {
        //THESE ARE NOT TO BE USED UNLESS YOU WANT TO GENERATE MORE EXERCISES. IF YES, COPY THE SETUP BELOW

        //Exercise 1
        Exercise exercise1 = new Exercise("MathMadness", "oddDoubler");
        exerciseService.addExercise(exercise1);

        List<TestCase> testCases1 = new ArrayList<>();
        testCases1.add(new TestCase(
                Arrays.asList(2, 2),
                4,
                exercise1
        ));
        testCases1.add(new TestCase(
                Arrays.asList(2, 3),
                10,
                exercise1
        ));
        testCases1.add(new TestCase(
                Arrays.asList(0, 0),
                0,
                exercise1
        ));
        exercise1.setTestCases(testCases1);
        testCaseService.addAllTestCases(testCases1);

        //Exercise 2
        Exercise exercise2 = new Exercise("StringShenanigans", "capitalizer");
        exerciseService.addExercise(exercise2);

        List<TestCase> testCases2 = new ArrayList<>();
        testCases2.add(new TestCase(
                Arrays.asList("HELLO"),
                "Hello",
                exercise2
        ));
        testCases2.add(new TestCase(
                Arrays.asList("wORLD"),
                "World",
                exercise2
        ));
        testCases2.add(new TestCase(
                Arrays.asList("jAVA"),
                "Java",
                exercise2
        ));
        exercise2.setTestCases(testCases2);
        testCaseService.addAllTestCases(testCases2);
    }
}
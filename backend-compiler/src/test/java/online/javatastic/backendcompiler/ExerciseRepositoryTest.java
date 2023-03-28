package online.javatastic.backendcompiler;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

import online.javatastic.backendcompiler.exercise.Exercise;
import online.javatastic.backendcompiler.exercise.ExerciseRepository;
import online.javatastic.backendcompiler.exercise.ExerciseService;
import online.javatastic.backendcompiler.testcase.TestCase;
import online.javatastic.backendcompiler.testcase.TestCaseService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Transactional
public class ExerciseRepositoryTest {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private ExerciseService exerciseService;
    @Autowired
    private TestCaseService testCaseService;
    @Autowired
    private ExerciseTestCaseGenerator exerciseTestCaseGenerator;

    @Test
    public void testCreateExercise() {
        exerciseTestCaseGenerator.generateExercisesAndTestCases();
    }

/*
    @Test
    public void testReadExercise() {
        Exercise exercise = exerciseService.getExerciseById(15);
        exercise.getTestCases().forEach(testCase -> testCase.getInputList().forEach(o -> System.out.println(o)));
    }
/*
    @Test
    public void testUpdateExercise() {
        Exercise exercise = new Exercise("TestExercise", "test");

        entityManager.persist(exercise);

        Exercise foundExercise = exerciseService.getExerciseById(exercise.getExerciseId());
        foundExercise.setFileName("UpdatedTestExercise");

        exerciseService.addExercise(foundExercise);

        Exercise updatedExercise = exerciseService.getExerciseById(exercise.getExerciseId());
        assertNotNull(updatedExercise);
        assertEquals("UpdatedTestExercise", updatedExercise.getFileName());
    }

    @Test
    public void testDeleteExercise() {
        Exercise exercise = new Exercise("TestExercise", "test");

        entityManager.persist(exercise);

        exerciseService.delete(exercise);

        Exercise deletedExercise = exerciseService.getExerciseById(exercise.getExerciseId());
        assertNull(deletedExercise);
    }

    @Test
    public void testFindAllExercises() {
        Exercise exercise1 = new Exercise("TestExercise1", "test");

        Exercise exercise2 = new Exercise("TestExercise2", "test");

        entityManager.persist(exercise1);
        entityManager.persist(exercise2);

        List<Exercise> exercises = exerciseService.findAll();

        assertEquals(2, exercises.size());
    }*/
}

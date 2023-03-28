package online.javatastic.backendcompiler.testcase;
import online.javatastic.backendcompiler.exercise.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestCaseRepository extends JpaRepository<TestCase, Long> {
    List<TestCase> findByExercise(Exercise exercise);
}
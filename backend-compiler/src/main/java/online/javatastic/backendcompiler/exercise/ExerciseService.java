package online.javatastic.backendcompiler.exercise;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import online.javatastic.backendcompiler.ConnectorConnectionPoolFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.*;

@Service
public class ExerciseService {

    private final DataSource dataSource = ConnectorConnectionPoolFactory.createConnectionPool();
    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private EntityManager entityManager;

    public Exercise addExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    public Exercise getExerciseById(Long exerciseId) {
        try (Connection connection = dataSource.getConnection()) {
            String query = "SELECT e FROM Exercise e WHERE e.exerciseId = :exerciseId";
            TypedQuery<Exercise> typedQuery = entityManager.createQuery(query, Exercise.class);
            typedQuery.setParameter("exerciseId", exerciseId);
            Exercise exercise = typedQuery.getSingleResult();
            entityManager.close();
            return exercise;
        } catch (SQLException e) {
            // handle exception
            System.out.println("Failed to find Exercise");
            e.printStackTrace();
        }
        return null;
    }

    public List<Exercise> findAll() {
        return exerciseRepository.findAll();
    }

    public void deleteById(Long id) {
        exerciseRepository.deleteById(id);
    }

    public void delete(Exercise exercise) {
        exerciseRepository.delete(exercise);
    }


}
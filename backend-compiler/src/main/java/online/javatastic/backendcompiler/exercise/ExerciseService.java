package online.javatastic.backendcompiler.exercise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;

    public Exercise addExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    public Exercise getExerciseById(Long id) {
        return exerciseRepository.findById(id).orElse(null);
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
package online.javatastic.backendcompiler;

import online.javatastic.backendcompiler.exercise.Exercise;
import online.javatastic.backendcompiler.exercise.ExerciseService;
import online.javatastic.backendcompiler.testcase.TestCaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendCompilerApplication {

	@Autowired
	private ExerciseService exerciseService;
	@Autowired
	private TestCaseService testCaseService;
	@Autowired
	private ExerciseTestCaseGenerator exerciseTestCaseGenerator;

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(BackendCompilerApplication.class, args);
		/* USE THIS TO GENERATE MORE EXERCISES IN THE DATABASE
		BackendCompilerApplication app = ctx.getBean(BackendCompilerApplication.class);
		app.exerciseTestCaseGenerator.generateExercisesAndTestCases();
		*/
	}

}

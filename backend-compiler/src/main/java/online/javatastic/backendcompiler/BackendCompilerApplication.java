package online.javatastic.backendcompiler;

import online.javatastic.backendcompiler.exercise.ExerciseService;
import online.javatastic.backendcompiler.testcase.TestCaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendCompilerApplication {

	@Autowired
	private ExerciseService exerciseService;
	@Autowired
	private TestCaseService testCaseService;
	@Autowired
	private ExerciseTestCaseGenerator exerciseTestCaseGenerator;
	@Autowired
	private CodeController codeController;

	public static void main(String[] args) {
		SpringApplication.run(BackendCompilerApplication.class, args);
		//ApplicationContext ctx = SpringApplication.run(BackendCompilerApplication.class, args);
		/* USE THIS TO GENERATE MORE EXERCISES IN THE DATABASE
		BackendCompilerApplication app = ctx.getBean(BackendCompilerApplication.class);
		app.exerciseTestCaseGenerator.generateExercisesAndTestCases();
		*/
	}

}

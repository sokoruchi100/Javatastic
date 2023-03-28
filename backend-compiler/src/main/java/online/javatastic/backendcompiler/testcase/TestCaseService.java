package online.javatastic.backendcompiler.testcase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestCaseService {
    @Autowired
    private TestCaseRepository testCaseRepository;

    public List<TestCase> getAllTestCases() {
        return testCaseRepository.findAll();
    }

    public TestCase getTestCaseById(Long id) {
        return testCaseRepository.findById(id).orElse(null);
    }

    public TestCase addTestCase(TestCase testCase) {
        return testCaseRepository.save(testCase);
    }

    public void addAllTestCases(List<TestCase> testCases) {
        testCases.forEach(testCase -> testCaseRepository.save(testCase));
    }

    public void deleteTestCase(Long id) {
        testCaseRepository.deleteById(id);
    }

}
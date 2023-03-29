package online.javatastic.backendcompiler;

import com.fasterxml.jackson.databind.ObjectMapper;
import online.javatastic.backendcompiler.result.CompilationResult;
import online.javatastic.backendcompiler.result.TestResult;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CodeControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private TestRestTemplate restTemplate;
    private String code;
    private Long exerciseId;

    @BeforeEach
    public void setUp() {
        code = "public class StringShenanigans {" +
                "public String capitalizer(String str) {" +
                "    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();" +
                "}" +
                "}";
        exerciseId = 4L;
    }

/*
    @Test
    public void testGetUserCode() throws InterruptedException {
        //Given
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        String json = "{ \"code\": \""+code+"\", \"exerciseId\": "+exerciseId+" }";
        HttpEntity<String> requestEntity = new HttpEntity<String>(json, headers);

        //When
        ResponseEntity<CompilationResult> response = restTemplate.postForEntity("/api/submit", requestEntity, CompilationResult.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());

        if (response.getStatusCode() == HttpStatus.OK) {
            // check the type of the response body and cast it to the appropriate type
            CompilationResult compilationResult = response.getBody();
            if (compilationResult.isSuccess()) {
                //Wait for the server to complete execution
                ResponseEntity<TestResult[]> response2 = restTemplate.getForEntity("/api/results", TestResult[].class);
                //ResponseEntity<TestResult[]> response2 = restTemplate.exchange("/api/results", HttpMethod.GET, null, new ParameterizedTypeReference<TestResult[]>() {});
                TimeUnit.SECONDS.sleep(5);
                //Then
                assertEquals(HttpStatus.OK, response2.getStatusCode());
                assertNotNull(response2.getBody());
                if (response2.getStatusCode() == HttpStatus.OK) {
                    System.out.println("SUCCEEDED GETTING TESTCASES");
                    TestResult[] testResults = response2.getBody();
                    // handle List<TestResult>
                    System.out.println("TEST RESULTS SIZE: "+testResults.length);
                    for (TestResult testResult : testResults) {
                        System.out.println("INPUTS: "+testResult.getTestCase().getInputList().toString());
                        System.out.println("OUTPUT: "+testResult.getOutput());
                        System.out.println("EXPECTED OUTPUT: "+testResult.getTestCase().getExpectedOutput());
                        System.out.println("SUCCESS: "+testResult.isSuccess());
                    }
                } else {
                    // handle error response
                    System.out.println("GET TEST CASES FAILED");
                }
            } else {
                System.out.println("COMPILATION ERROR");
                System.out.println(compilationResult.getOutput());
            }
        } else {
            // handle error response
            System.out.println("GET COMPILATION FAILED");
        }
    }*/
}

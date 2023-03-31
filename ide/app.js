const EXERCISE_ID = 3;
const SERVER_URL = "https://backend-compiler-image-dgs3tukkda-uc.a.run.app"
const POST_URL = "/api/submit";
const GET_URL = "/api/results";

$(document).ready(function () {
    let editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");
    let javacode = `public class MathMadness {
    public int oddDoubler(int a, int b) {
        int sum = a + b;
        int multiplier = sum % 2;
        return sum + (multiplier * sum);
    }
}`;
    editor.setValue(javacode);

    $(".btn").click(function () {

        let code = editor.getValue();
        $(".output").html("Loading...");
        console.log(code);

        $.ajax({
            type: "POST",
            url: SERVER_URL+POST_URL,
            contentType: "application/json",
            data: JSON.stringify({ code: code, exerciseId: EXERCISE_ID }),
            success: function(result) {
                // Wait for the server to finish processing the code, then send a GET request
                if (result.success) {
                    var intervalId = setInterval(function() {
                        $.get(SERVER_URL+GET_URL, function(output) {
                            // Output received, update the UI with the results
                            $(".output").empty();
                            console.log(output);
                            output.forEach(result => {
                                $(".output").append(`Inputs: [${result.testCase.inputList}], Output: ${result.output}, Expected Output: ${result.testCase.expectedOutput}, Success: ${result.success} \n`);
                            });
                            
                            clearInterval(intervalId);
                        });
                    }, 1000);
                } else {
                    $(".output").empty();
                    $(".output").append(`Compilation Error: ${result.output}`);
                }
                
            },
            error: function(xhr, status, error) {
                // Handle errors here
                console.log(xhr.responseText);
            }
        });
    });
});


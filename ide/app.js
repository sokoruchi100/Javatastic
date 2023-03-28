const EXERCISE_ID = 8;
const POST_URL = "/usercode/submit";
const GET_URL = "/usercode/testresults";

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
            url: POST_URL,
            data: JSON.stringify({ code: code, exerciseId: EXERCISE_ID }),
            success: function(result) {
                // Wait for the server to finish processing the code, then send a GET request
                var intervalId = setInterval(function() {
                $.get(GET_URL, function(output) {
                    // Output received, update the UI with the results
                    $(".output").text(output);
                    clearInterval(intervalId);
                });
                }, 1000);
            },
            error: function(xhr, status, error) {
                // Handle errors here
                console.log(xhr.responseText);
            }
        });
    });
});


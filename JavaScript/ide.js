const SERVER_URL = "https://backend-compiler-image-dgs3tukkda-uc.a.run.app"
const RUN_POST_URL = "/api/run";
const RUN_GET_URL = "/api/output";
$(document).ready(function () {
    const ide = ace.edit("ide");
    ide.setTheme("ace/theme/monokai");
    ide.session.setMode("ace/mode/java");

    const javacode = `public class Main {
        public static void main(String[] args) {
            //Type Here
        }
    }`
    ide.setValue(javacode);

    $(".reset").click(function () {
        ide.setValue(javacode);
    })

    $(".run").click(function () {
        let code = editor.getValue();
        $(".output").html("Loading...");
        console.log(code);

        //Testing the normal ide functionality
        $.ajax({
            type: "POST",
            url: SERVER_URL+RUN_POST_URL,
            contentType: "application/json",
            data: JSON.stringify({ code: code, exerciseId: -1 }),
            success: function(result) {
                // Wait for the server to finish processing the code, then send a GET request
                if (result.success) {
                    var intervalId = setInterval(function() {
                        $.get(SERVER_URL+RUN_GET_URL, function(output) {
                            // Output received, update the UI with the results
                            console.log(output);
                            $(".output").text(output);
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
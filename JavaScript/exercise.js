"use strict";
import { exerciseBank } from "./exerciseBank.js";

const SERVER_URL = "https://backend-compiler-image-dgs3tukkda-uc.a.run.app"
const TEST_POST_URL = "/api/submit";
const TEST_GET_URL = "/api/results";

$(document).ready(function () {
    const id = $(".submit").attr("id");
    ace.require("ace/ext/language_tools");
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.getSession().setMode("ace/mode/java");
    editor.getSession().setUseWorker(true);
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
    });
    
    editor.setValue(exerciseBank[id].preCode);

    $(".reset").click(function () {
        editor.setValue(exerciseBank[id].preCode);
    })

    $(".submit").click(function () {
        let code = editor.getValue();
        $(".output").html("Loading...");
        console.log(code);

        $.ajax({
            type: "POST",
            url: SERVER_URL+TEST_POST_URL,
            contentType: "application/json",
            data: JSON.stringify({ code: code, exerciseId: id }),
            success: function(result) {
                // Wait for the server to finish processing the code, then send a GET request
                if (result.success) {
                    var intervalId = setInterval(function() {
                        $.get(SERVER_URL+TEST_GET_URL, function(output) {
                            // Output received, update the UI with the results
                            $(".output").empty();
                            console.log(output);
                            if (testFailure(output)) {
                                $(".output").append("TEST FAILURE");
                            } else {
                                $(".output").append("ALL TESTS SUCCEEDED");
                            }
                            
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

function testFailure(testResults) {
    let hasFailure = false;

    testResults.forEach(result => {
        if (!result.success) {
            console.log(!result.success);
            hasFailure = true;
        }
    });

    return hasFailure;
}

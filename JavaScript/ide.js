"use strict";
const SERVER_URL = "https://backend-compiler-image-dgs3tukkda-uc.a.run.app"
const RUN_POST_URL = "/api/run";
const RUN_GET_URL = "/api/output";
export function setupAceEditor(editorId, code) {

    ace.require("ace/ext/language_tools");
    const editor = ace.edit(editorId);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/java");
    editor.getSession().setUseWorker(true);
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });

    const ide = $(`#${editorId}`);
    const outputContainer = ide.siblings(".output");
    const editorContainer = ide.parent();
    const btnContainer = editorContainer.siblings(".btn-container");
    const reset = btnContainer.children(".reset");
    const run = btnContainer.children(".run");

    const javacode = `public class Main {
    public static void main(String[] args) {
        ${code}
    }
}`;
    editor.setValue(javacode);

    reset.click(function () {
        editor.setValue(javacode);
    })

    run.click(function () {
        let code = editor.getValue();
        outputContainer.html("Loading...");

        $.ajax({
            type: "POST",
            url: SERVER_URL + RUN_POST_URL,
            contentType: "application/json",
            data: JSON.stringify({ code: code, exerciseId: -1 }),
            success: function(result) {
                if (result.success) {
                    var intervalId = setInterval(function() {
                        $.get(SERVER_URL + RUN_GET_URL, function(output) {
                            outputContainer.text(output);
                            clearInterval(intervalId);
                        });
                    }, 1000);
                } else {
                    outputContainer.empty();
                    outputContainer.append(`Compilation Error: ${result.output}`);
                }
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });
}

$(document).ready(function () {
    setupAceEditor("editor", "");
    // this setup code only runs when viewport is at least 768px wide
    const ideToggle = $(".ide-toggle");

    //Arrow Icon
    const ideIconTL = gsap.timeline({paused: true});

    ideIconTL.to('.arrow-1', 0.5,{
        attr:{d: "M8,2 L2,8"},
        ease: Power2.easeInOut
    }, 'start')

    .to('.arrow-2', 0.5,{
        attr:{d: "M2,2 L8,8"},
        ease: Power2.easeInOut
    }, 'start')

    .reverse();

    //Moving IDE
    const ideTL = gsap.timeline({paused: true});

    ideTL.from('.slider', 0.5,{
        y:"94%",
        ease: 'Expo.easeInOut'
    })

    .reverse();

    ideToggle.click( function() {
        ideIconTL.reversed(!ideIconTL.reversed());
        ideTL.reversed(!ideTL.reversed());
    });

});




/*"use strict";
const SERVER_URL = "https://backend-compiler-image-dgs3tukkda-uc.a.run.app"
const RUN_POST_URL = "/api/run";
const RUN_GET_URL = "/api/output";
$(document).ready(function () {
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
    
    const javacode = `public class Main {
    public static void main(String[] args) {
        //Type Here
    }
}`
    editor.setValue(javacode);

    $(".reset").click(function () {
        editor.setValue(javacode);
    })

    $(".run").click(function () {
        let code = editor.getValue();
        $(".output").html("Loading...");
        console.log(code);

        //Testing the normal editor functionality
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

    // this setup code only runs when viewport is at least 768px wide
    const ideToggle = $(".ide-toggle");

    //Arrow Icon
    const ideIconTL = gsap.timeline({paused: true});

    ideIconTL.to('.arrow-1', 0.5,{
        attr:{d: "M8,2 L2,8"},
        ease: Power2.easeInOut
    }, 'start')

    .to('.arrow-2', 0.5,{
        attr:{d: "M2,2 L8,8"},
		ease: Power2.easeInOut
    }, 'start')

    .reverse();

    //Moving IDE
    const ideTL = gsap.timeline({paused: true});

    ideTL.from('.slider', 0.5,{
        y:"94%",
        ease: 'Expo.easeInOut'
    })

    .reverse();

    ideToggle.click( function() {
        ideIconTL.reversed(!ideIconTL.reversed());
        ideTL.reversed(!ideTL.reversed());
    });

});*/
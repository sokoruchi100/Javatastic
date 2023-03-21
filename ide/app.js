const JAVA_KEY = "62";
const BASE_URL = "http://34.30.24.202:2358/submissions"

$(document).ready(function () {
    let editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");
    let javacode = `public class Main {
    public static void main(String args[]) {
        System.out.println("Hello world!");
    }
}`;
    editor.setValue(javacode);

    $(".btn").click(function () {

        let code = editor.getValue();
        //code = code.replace(/(\r\n|\n|\r)/gm, "");
        $(".output").html("Loading...");
        console.log(code);

        let data = {
            source_code: code,
            language_id: JAVA_KEY,
            stdin: "Judge0",
        };

        console.log(data)

        let request = $.ajax({
            url: BASE_URL,
            type: "post",
            data: data,
        });

        // Callback handler that will be called on success
        request.done(async function (response, textStatus, jqXHR) {
            // Log a message to the console
            console.log("Hooray, it worked!");
            
            let token = response.token;
            
            await new Promise((resolve) => setTimeout(resolve, 2000)); // 5 sec
            
            let second_request = $.ajax({
                url: BASE_URL + "/"+ token,
                type: "get",
            });
            
            second_request.done(function (response) {
                console.log(response.stdout);
                console.log(response.compile_output);
                if (response.stdout == null) {
                    $(".output").html(response.compile_output);
                } else {
                    $(".output").html(response.stdout);
                }
            });
        });
    });
});


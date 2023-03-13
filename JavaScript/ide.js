"use strict";
let editor;

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");
}

function executeCode() {
    jQuery.support.cors = true;
    $.ajax({
        url: "../../ide/compiler.php",

        method: "POST",

        data: {
            code: editor.getSession().getValue()
        },

        success: function(response) {
            $(".output").text(response)
        }
    })
}
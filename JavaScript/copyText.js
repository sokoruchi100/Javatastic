"use strict";

$(document).ready(function () {
    // Select the element
    const $copyText = $('.code');

    // Add click event listener to the element
    $copyText.on('click', function(event) {
        const codeText = $(this).find('pre code').text(); // get the text content of the grandchild
        navigator.clipboard.writeText(codeText)
            .then(function() {
                console.log("Code has been copied");
            })
            .catch(function(error) {
                console.error("Error copying code: ", error);
            });
    });

})

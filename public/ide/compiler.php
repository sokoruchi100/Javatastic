<?php
    header("Access-Control-Allow-Origin: *");
    //Stores code
    $code = $_POST['code'];
    //Name of class depends on exercise, posted by javascript
    $className = "Main";

    //Delete all old temp files
    //get all file names from temp
    $files = glob('temp/*');
    //iterate files
    foreach($files as $file){ 
        if(is_file($file)) {
            // delete file
            unlink($file); 
        }
    }
    //Creates the path for java file
    $filePath = "temp/" . $className . ".java";
    //creates a file in the temp folder
    $programFile = fopen($filePath, "w");
    //Writes code into file
    fwrite($programFile, $code);
    //Closes file
    fclose($programFile);

    //Creates output from runninng java compiler on file
    shell_exec("compilers\javac.exe $filePath");
    $output = shell_exec("cd temp && ..\compilers\java.exe $className 2>&1");
    //Returns output to javascript
    echo $output;
?>
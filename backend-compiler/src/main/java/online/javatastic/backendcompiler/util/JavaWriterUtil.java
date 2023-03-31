package online.javatastic.backendcompiler.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;

public class JavaWriterUtil {
    //private static final String TEMP_PATH = "src/main/java/online/javatastic/backendcompiler/volume/";
    private static final String TEMP_PATH = "mnt/";
    private static final String TEMP_NAME = "temp";
    private static final String JAVA_EXTENSION = ".java";

    public static Path createDir() throws IOException {
        // path of the directory in which temporary
        // directory has to created
        Path dir = Paths.get(TEMP_PATH);

        Path tempDir = Files.createTempDirectory(dir, TEMP_NAME);
        return tempDir;
    }

    public static File write(String code, String fileName, Path tempDir) throws IOException {
        // Create the Java source file
        File javaFile = new File(tempDir.toString(), fileName+JAVA_EXTENSION);
        javaFile.createNewFile();
        FileWriter writer = new FileWriter(javaFile);
        writer.write(code);
        writer.close();

        return javaFile;
    }

    public static void recursiveDeleteOnExit(Path path) throws IOException {
        Files.walkFileTree(path, new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult visitFile(Path file,
                                             @SuppressWarnings("unused") BasicFileAttributes attrs) {
                file.toFile().deleteOnExit();
                return FileVisitResult.CONTINUE;
            }
            @Override
            public FileVisitResult preVisitDirectory(Path dir,
                                                     @SuppressWarnings("unused") BasicFileAttributes attrs) {
                dir.toFile().deleteOnExit();
                return FileVisitResult.CONTINUE;
            }
        });
    }
}
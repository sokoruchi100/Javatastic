FROM eclipse-temurin:17.0.6_10-jre
FROM eclipse-temurin:17.0.6_10-jdk
EXPOSE 8080
ADD target/backend-compiler-0.0.1-SNAPSHOT.jar /app.jar
VOLUME /data
CMD ["java", "-jar", "app.jar"]
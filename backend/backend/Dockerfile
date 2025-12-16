FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests
ENTRYPOINT ["java", "-jar", "target/jr-constructions-0.0.1-SNAPSHOT.jar"]

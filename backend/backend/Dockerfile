# 1. Use Java 17
FROM eclipse-temurin:17-jdk-alpine

# 2. Set the folder
WORKDIR /app

# 3. Copy the project files
COPY . .

# 4. Give permission to the build tool (Fixes the "Permission Denied" error)
RUN chmod +x mvnw

# 5. Build the app
RUN ./mvnw clean package -DskipTests

# 6. Run the app
ENTRYPOINT ["java", "-jar", "target/jr-constructions-0.0.1-SNAPSHOT.jar"]
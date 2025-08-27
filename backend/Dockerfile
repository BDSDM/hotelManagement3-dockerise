# Étape 1 : Build du jar avec Maven
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Étape 2 : Exécution du jar
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Activation du profil prod
ENV SPRING_PROFILES_ACTIVE=prod

# Variables DB si besoin
ENV DB_HOST=db
ENV DB_PORT=3306
ENV DB_NAME=monHotelManagement3
ENV DB_USER=root
ENV DB_PASSWORD=

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

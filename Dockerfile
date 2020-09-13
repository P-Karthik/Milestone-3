FROM openjdk:14
ADD target/discovery-server-0.0.1-SNAPSHOT.jar discovery-server-0.0.1-SNAPSHOT.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","discovery-server-0.0.1-SNAPSHOT.jar"]
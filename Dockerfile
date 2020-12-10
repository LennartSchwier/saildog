FROM openjdk:15-oracle

MAINTAINER Lennart Schwier <lennart.scw@gmail.com>

ADD backend/target/saildog.jar app.jar

EXPOSE 5000

CMD [ "sh", "-c", "java -jar -Dserver.port=5000 -Dstorm.glass.key=$STORM_GLASS_KEY -Djwt.secret.key=$JWT_SECRET_KEY -Dspring.data.mongodb.uri=$MONGO_DB_URI app.jar" ]
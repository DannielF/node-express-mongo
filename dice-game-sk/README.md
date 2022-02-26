# node-express-mongo
 A project to understand how it works these three technologies together

## Quick start
    > git clone the project 
    > git clone https://github.com/DannielF/node-express-mongo.git
    > cd to the folder 
    > cd node-express-mongo/dice-game-sk
    > npm install

## Database
    > the mongo database is running in a docker container.
    > docker-compose up -d ImageName -> rise service
    > docker-compose down -> down service
    > docker-compose exec imageName bash -> execute container
    > see the docker-compose.yml file for details.

> see [Docker-hub](https://www.docker.com/), to know how to install Docker in your system.

> see [Mongo-image](https://hub.docker.com/_/mongo/), to install a mongo image in Docker.

## Running the project
    > npm run dev -> run dev mode
    > npm run start -> run standard

## Routes
    > home -> localhost:3000/

    "GET"
    > create-game -> localhost:3000/createGame
    > game-status -> localhost:3000/game/:id
    > game-winner -> localhost:3000/game/:id/winner
    > start-game -> localhost:3000/startGame

    "POST"
    > create-game -> localhost:3000/createGame
    > start-game -> localhost:3000/startGame
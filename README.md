# Crafty
Dockerised rest api for Crafty using Nodejs, TypeScript, Expressjs etc

## Requirements
- nodejs [https://nodejs.org/en/download/package-manager/]
- docker

## App Instructions
Run following commands
- cd crafty
- npm install 

## Settings
Add mongo url and port in /.env
- Default port is 8000 
- create a file called '.env' in root directory with settings content follows .env.example

## Test and Coverage
Test commands are
- npm test (for test with watch)
- npm run coverage (for test and coverage with watch)

## App run commands
- npm start
- npm run start:dev (dev mood)

## Run app with docker image
- docker build -t crafty . # to build image
- docker run -d -p 8000:8000 crafty

## Run app with docker compose
- docker-compose build
- docker-compose up -d

server will start with default 8000 port on url http://localhost:8000

## Apis 
- GET /direction?heading=310&target=75


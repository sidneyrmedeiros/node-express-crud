<h1 align="center"><img src="https://media.licdn.com/dms/image/C5612AQFmR3vLJ2KUOg/article-cover_image-shrink_423_752/0/1589725992975?e=1699488000&v=beta&t=dQ_dRrx3KPROx1ZCoRkjJu01g7k9vCqsSe9ot3BWhyU" alt="NodeJS Express MongoDb"></h1>

<p align="center">
<a href="https://github.com/sidneyrmedeiros/node-express-crud/actions"><img src="https://github.com/sidneyrmedeiros/node-express-crud/actions/workflows/node.js.yml/badge.svg?branch=master" alt="Build Status"></a>
<a href="https://github.com/sidneyrmedeiros/node-express-crud/blob/master/LICENSE"><img src="https://img.shields.io/github/license/sidneyrmedeiros/node-express-crud.svg" alt="License MIT"></a>
</p>

# Product CRUD

A RESTful API developed in *Javascript* to demonstrate the use of the tech stack. An authentication mechanism using JWT Token has been implemented, with a mock admin user. A local RabbitMQ via Docker was implemented to receive data after requests, although it has not been finalized.

This CRUD includes the following routes:

- GET /api/products
- POST /api/products
- GET /api/products/{id}
- PUT /api/products/{id}
- DELETE /api/products/{id}
- POST /api/auth
- GET /api/joke
- GET /api/health

## Stack
The following stack was used:

- NodeJS
- Express
- MongoDB
- Docker
- RabbitMQ (incomplete)

## Installation

1. Clone/Download the repo: `git clone https://github.com/sidneyrmedeiros/node-express-crud.git`
2. Copy the `.env.example` file to `.env` and configure your environment variables.
3. To build the containers, run `docker-compose up --build`.
4. Configure the MongoDB URL in the `.env` file:
    - Local: `MONGODB_URL=mongodb://mongo:27017/docker-node-mongo`
    - [Atlas MongoDB](https://cloud.mongodb.com/): `MONGODB_URL=mongodb+srv://user:pass@{database}.mongodb.net/?retryWrites=true&w=majority`

Once everything is installed, you are ready to go.

## Usage

1. To run, use `docker-compose up`.
2. Access the Swagger Documentation: [http://localhost:3000/swagger](http://localhost:3000/swagger)
3. To authenticate: [http://localhost:3000/swagger/#/Auth/post_api_auth](http://localhost:3000/swagger/#/Auth/post_api_auth)
```json
{
  "username": "admin",
  "password": "123456"
}
```
3. Access the Products API: [http://localhost:3000/api/products](http://localhost:3000/api/products)
4. Access the Joke API: [http://localhost:3000/api/joke](http://localhost:3000/api/joke)
```json
{
  "value": "Greek Gods fled to Mount Olympus they saw Chuck Norris wandered on earth."
}
```
5. Access the local RabbitMQ: [http://localhost:15673/](http://localhost:15673/)

Once everything is installed, you are ready to go.
## Test

1. Run tests by `docker exec crud-node-api npm test`

##### by Sidney Ricardo Medeiros

### Follow Me

<a href="https://www.linkedin.com/in/sidney-ricardo-medeiros/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Sidney Ricardo Medeiros"></a>

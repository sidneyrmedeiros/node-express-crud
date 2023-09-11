<h1 align="center"><img src="https://media.licdn.com/dms/image/C5612AQFmR3vLJ2KUOg/article-cover_image-shrink_423_752/0/1589725992975?e=1699488000&v=beta&t=dQ_dRrx3KPROx1ZCoRkjJu01g7k9vCqsSe9ot3BWhyU" alt="NodeJS Express MongoDb"></h1>

# CRUD de produtos

API Rest desenvolvida em *Javascript* com a finalidade de demonstrar o uso da stack. 
Foi desenvolvido uma autenticação via JWT Token, mockando o usuário admin.
O RabbitMQ local via Docker foi implementado, recebendo dados após requisição, mas não foi finalizado.

Este crud possui as seguintes rotas:

- GET /api/products
- POST /api/products
- GET /api/products/{id}
- PUT /api/products/{id}
- DELETE /api/products/{id}
- POST /api/auth
- GET /api/joke
- GET /api/healh

## Stack
Foi utilizada a seguinte stack:

- NodeJS
- Express
- MongoDB
- Docker
- RabbitMQ (incomplete)

## Instalation

1. Clone/Download the repo: `git clone https://github.com/sidneyrmedeiros/node-crud-compass.git`
2. Copy `.env.example` file to `.env` & Setup your environment variables
3. To build the containers run `docker-compose up --build`
4. URL to configure the MongoDB at `.env` file:
    - Local: `MONGODB_URL=mongodb://mongo:27017/docker-node-mongo`
    - [Atlas MongoDB](https://cloud.mongodb.com/): `MONGODB_URL=mongodb+srv://user:pass@{database}.mongodb.net/?retryWrites=true&w=majority`

Once everything is installed, you are ready to go.

## Usage

1. To run `docker-compose up`
2. To access the Swagger Documentation: [http://localhost:3000/swagger](http://localhost:3000/swagger)
2. To authenticate: [http://localhost:3000/swagger/#/Auth/post_api_auth](http://localhost:3000/swagger/#/Auth/post_api_auth)
```json
{
  "username": "admin",
  "password": "123456"
}
```
3. To access the Products API: [http://localhost:3000/api/products](http://localhost:3000/api/products)
4. To access the Joke API: [http://localhost:3000/api/joke](http://localhost:3000/api/joke)
```json
{
  "value": "Greek Gods fled to Mount Olympus they saw Chuck Norris wandered on earth."
}
```
5. To access the local RabbitMQ: [http://localhost:15673/](http://localhost:15673/)

Once everything is installed, you are ready to go.
## Test

1. Run tests by `docker exec crud-node-api npm test`

#### Desenvolvido com base nas instruções recebidas da  [<img src="https://compass.uol/etc.clientlibs/compass/clientlibs/clientlib-react/resources/static/media/logo.d35fe3b1.svg" alt="Compass UOL">](https://compass.uol/) 

##### by Sidney Ricardo Medeiros

### Follow Me

- [LinkedIn](https://www.linkedin.com/in/sidney-ricardo-medeiros/)


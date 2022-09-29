# Nodejs Project To Get ETH Price, Volume and Liquidity From Uniswap using GraphQL Queries.

I have used Uniswap-v2 to consume this data.

## Get Started

### npm i
Please enter above command to install dependencies listed in package,json file of current project

### node server.js/nodemon server.js
Please enter above command to start backend server which is running on 8000 port. In postman we can use http://localhost:8000 as a baseurl and can call APIs.

## File Structure

### server.js
This file starts expressJS server on port 8000

### graphql.js
This file consists axios method to call graphql queries

### queries
This file has queries listed to get individual query which is used in graphql.js

### routes/uniswap.js
This file has list of apis which is pointed to respective controllers

### controllers/uniswap.js
This file has controllers of respective api.

## Postman Collection

Postman collection is added in PostmanCollection Directory. Please make sure node project is running to response in postman collection
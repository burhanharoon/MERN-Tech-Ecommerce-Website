4) Going to add "Nodemon" and "Concurently" into our server so that our server and the frontend can run simentaneously.
   ``` npm i -D nodemon concuncurrently```
5) Going to setup the ENV environment so that I can place all my personal details like API key etc in that file
   -  ```npm i dotenv```
   -  Use ```process.env``` to access the contents in the env file.
6) Added a ```MONGO_URI = {fetched from the website}``` field in the ```.env``` file
7} Adding Mongoose in the project
   -  ```npm i mongoose```
8) Added Schemas for Users Products and Orders
9) Using ```npm i bcryptjs``` to encrypt the password in mongoDB
10)   Creating a Seedr script to seed data in the DB
11)   Fetched data from the website and displayed it in the browser
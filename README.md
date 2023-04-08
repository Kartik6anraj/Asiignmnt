# Asiignmnt

To implement the backend API with User, Blog and Comment models, we can use a relational database like PostgreSQL or MySQL. In this example, we will be using PostgreSQL.

To find 1st, 2nd, or k-th level friends of a user, we can use a recursive SQL query. Here is the SQL query to find all the n-th level friends of a user

To implement the solution using Node.js, we will use the following technologies:

Express.js for creating RESTful APIs
PostgreSQL for storing the data
Sequelize ORM for database modeling and querying
Let's start by setting up the project.

Project Setup
We will start by creating a new Node.js project using npm init. Then, we will install the required dependencies:

We will also create a new file called .env to store our environment variables. This file will contain the following variables:

We will create a new PostgreSQL database using the following command:

Then, we will create the required tables using the following SQL script:

We will create three models using Sequelize: User, Blog, and Comment. Here is the code for each model:

We will create a new file called db.js that will be responsible for establishing the database connection and loading the models.

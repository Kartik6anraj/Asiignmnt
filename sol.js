

// sample database schema

USER
- id (int, primary key)
- name (text)
- email (text)
- created_at (timestamp)
- updated_at (timestamp)

BLOG
- id (int, primary key)
- title (text)
- content (text)
- user_id (int, foreign key to User)
- created_at (timestamp)
- updated_at (timestamp)

COMMENT
- id (int, primary key)
- content (text)
- user_id (int, foreign key to User)
- blog_id (int, foreign key to Blog)
- created_at (timestamp)
- updated_at (timestamp)



// our sample data
USER
- id: 1, name: "John Doe", email: "john.doe@example.com"
- id: 2, name: "Jane Smith", email: "jane.smith@example.com"
- id: 3, name: "Bob Johnson", email: "bob.johnson@example.com"
- id: 4, name: "Alice Brown", email: "alice.brown@example.com"
- id: 5, name: "David Lee", email: "david.lee@example.com"

BLOG
- id: 1, title: "My first blog post", content: "Hello world!", user_id: 1
- id: 2, title: "My second blog post", content: "This is my second post.", user_id: 2
- id: 3, title: "My third blog post", content: "Another post by John.", user_id: 1

COMMENT
- id: 1, content: "Great post!", user_id: 2, blog_id: 1
- id: 2, content: "Thanks for sharing.", user_id: 3, blog_id: 1
- id: 3, content: "I totally agree.", user_id: 4, blog_id: 1
- id: 4, content: "Nice article.", user_id: 3, blog_id: 2
- id: 5, content: "Good job!", user_id: 1, blog_id: 3
- id: 6, content: "I like your writing style.", user_id: 5, blog_id: 3
- id: 7, content: "Keep up the good work!", user_id: 4, blog_id: 2

//To find 1st, 2nd, or k-th level friends of a user, we can use a recursive SQL query. Here is the SQL query to find all the n-th level friends of a user:

WITH RECURSIVE friends AS (
    SELECT DISTINCT c.user_id, b.user_id AS friend_id, 1 AS level
    FROM comment c
    JOIN blog b ON b.id = c.blog_id
    WHERE b.user_id <> c.user_id AND b.user_id = <user_id>
    UNION ALL
    SELECT DISTINCT f.user_id, c.user_id AS friend_id, f.level + 1 AS level
    FROM friends f
    JOIN comment c ON c.blog_id = f.blog_id
    WHERE c.user_id <> f.user_id AND f.friend_id <> c.user_id AND f.level < <level>
  )</level>  </></></>

  /***** */




















// start new project using npm init
npm install express pg sequelize body-parser cors


//We will also create a new file called .env to store our environment variables. This file will contain the following variables:

DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=your_database_port

// We will create a new PostgreSQL database using the following command:

createdb your_database_name


//Then, we will create the required tables using the following SQL script:
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
  );
  
  CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES "user" (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
  );
  
  CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES "user" (id) ON DELETE CASCADE,
    blog_id INTEGER REFERENCES blog (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
  );

  //models
  // user.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      timestamps: true,
    });
  
    User.associate = (models) => {
      User.hasMany(models.Blog);
      User.hasMany(models.Comment);
    };
  
    return User;
  };
  
  // blog.js
  
  module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
    }, {
      timestamps: true,
    });
  
    Blog.associate = (models) => {
      Blog.belongsTo(models.User);
      Blog.hasMany(models.Comment);
    };
  
    return Blog;
  };
  
  // comment.js
  
  module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      content: DataTypes.TEXT,
    }, {
      timestamps: true,
    });
  
    Comment.associate = (models) => {
      Comment.belongsTo(models.User);
      Comment.belongsTo(models.Blog);
    };
  
    return Comment;
  };
//Database Connection

const { Sequelize } = require('sequelize');

const

  
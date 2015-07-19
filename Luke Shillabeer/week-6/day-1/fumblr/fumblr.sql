CREATE DATABASE fumblr;
\c fumblr
CREATE TABLE posts (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(100),
  body TEXT
);


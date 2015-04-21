CREATE TABLE students (
  id serial4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  favourite_number INTEGER NOT NULL,
  created_at TIMESTAMP default NULL
);

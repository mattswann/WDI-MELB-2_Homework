CREATE TABLE movies (
  id          SERIAL,
  title       VARCHAR(100),
  year        INTEGER,
  rated       VARCHAR(30),
  runtime     INTEGER,
  genre       VARCHAR(100),
  director    VARCHAR(100),
  actors      VARCHAR(250),
  description TEXT,
  poster_url  VARCHAR(300),
  imdbID      VARCHAR(50)
);

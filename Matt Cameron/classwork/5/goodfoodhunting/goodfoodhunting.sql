CREATE TABLE dishes (
	id SERIAL4 PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	image_url VARCHAR(100)
);

INSERT INTO dishes ('name', 'image_url') VALUES ('apple', 'http://i2.wp.com/www.themonitordaily.com/wp-content/uploads/2015/03/aplle.jpg?resize=300%2C300');
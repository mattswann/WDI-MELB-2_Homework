
-- Create a new table
CREATE TABLE students
(
	id SERIAL4 PRIMARY KEY,  -- tell the database to automatically create an ID for each new row
	firstname VARCHAR(50),
	lastname VARCHAR(50),
	dob DATE,
	gpa FLOAT8
);

-- writing to the database
INSERT INTO students (firstname, lastname, dob, gpa) VALUES ('Daniel', 'Wiess', '6/10/1988', 3.2);


-- displaying all rows of the database
SELECT * FROM students;

-- sort by a column
SELECT * FROM students order by firstname;

-- sort by firstname, then by gpa
SELECT * FROM students order by firstname, gpa;

-- updating a specific row
update students set gpa=5.0 where id = 2;

-- deleting from the database
DELETE FROM students WHERE firstname = 'Daniel';

-- count all rows
select count(*) from students;

-- total gpa column
select sum(gpa) from students;

-- average of the gpa column
select avg(gpa) from students;
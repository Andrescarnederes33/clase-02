CREATE DATABASE IF NOT EXISTS ongstudio;

USE ongstudio;

SHOW TABLES;

CREATE TABLE ongs(
	ong_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	password VARCHAR(250) NOT NULL,
	confirmAccount INTEGER NOT NULL DEFAULT 0,
	created_at timestamp NOT NULL DEFAULT current_timestamp
);

CREATE TABLE IF NOT EXISTS websites(
	website_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	ong_id INTEGER UNSIGNED,
	url VARCHAR(250) NOT NULL UNIQUE,
	title VARCHAR(100) NOT NULL UNIQUE,
	description TEXT,
	category VARCHAR(100) NOT NULL,
	city VARCHAR(100) NOT NULL,
	phone VARCHAR(15) NOT NULL,
	networks_social VARCHAR (250) NOT NULL,
	created_at timestamp NOT NULL DEFAULT current_timestamp
);

CREATE TABLE IF NOT EXISTS proyects(
	proyect_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	website_id INTEGER UNSIGNED,
	title VARCHAR(100) NOT NULL UNIQUE,
	description TEXT,
	created_at timestamp NOT NULL DEFAULT current_timestamp
);

CREATE TABLE IF NOT EXISTS transactions_proyects(
	transaction_proyect_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	proyect_id INTEGER UNSIGNED,
	course_id INTEGER UNSIGNED,
	created_at timestamp NOT NULL DEFAULT current_timestamp
);


CREATE TABLE IF NOT EXISTS voluntaries(
	voluntarie_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	phone VARCHAR(15) NOT NULL,
	description TEXT,
	password VARCHAR(200) NOT NULL,
	created_at timestamp NOT NULL DEFAULT current_timestamp
);


SELECT alumns.alumn_id, alumns_courses.course_id 
	FROM alumns INNER JOIN alumns_courses 
		ON alumns.alumn_id = 4;

SELECT courses.title FROM courses INNER JOIN alumns_courses ON alumns_courses.course_id = courses.course_id;

-- 

SELECT a.alumn_id FROM courses AS c 
	JOIN alumns AS a 
		ON a.course_id = c.course_id WHERE a.alumn_id = 5;


SELECT alumns.CustomerName, courses.OrderID
FROM alumns
FULL OUTER JOIN alumns_courses ON alumns.CustomerID=courses.CustomerID
ORDER BY alumns.CustomerName;

/*DROP borra tablas*/

/*ALTER TABLE alumns
	ADD PRIMARY KEY (id);*/
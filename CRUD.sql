use test;
show tables;
CREATE TABLE users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(255) NOT NULL,
	AGE INT,
    CITY VARCHAR(255)
);
INSERT INTO users (name, age, city)
VALUES 
    ('msdhoni', 40, 'Ranchi'),
    ('rachin', 35, 'ACKLANF'),
    ('ashwin', 34, 'CHENNAI'),
	('virat', 34, 'BENGULAR'),
	('ROHIT', 38, 'mumbai');
    select * from users;
DROP table users;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

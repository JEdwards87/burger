DROP DATABASE IF EXISTS burgers_db;
SET autocommit = OFF;
CREATE DATABASE burgers_db;
USE burgers_db;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL ,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
)
CREATE DATABASE finditem;

CREATE TABLE lost(
itemid int primary key not null AUTO_INCREMENT,
category VARCHAR(100),
itemDec VARCHAR(240),
usserName VARCHAR(240),
phone int,
email VARCHAR(240),
location VARCHAR(240)
)

CREATE TABLE found(
itemid int primary key not null AUTO_INCREMENT,
category VARCHAR(100),
itemDec VARCHAR(240),
usserName VARCHAR(240),
phone int,
email VARCHAR(240),
location VARCHAR(240)
)
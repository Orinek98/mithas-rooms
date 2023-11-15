-- @block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    city VARCHAR(255),
    country VARCHAR(2)
);

--@block
CREATE TABLE Reservations(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(255),
    room VARCHAR(255),
    checkin DATE,
    checkout DATE
);

-- @block
INSERT INTO Reservations (user, room, checkin, checkout, adult, child)
VALUES(
    'Giovanna',
    'Blue',
    '20231219',
    '20231220',
    '2',
    '0'
);


-- @block
INSERT INTO Users (email, city, country)
VALUES(
    'pippo@gmail.com',
    'Catania',
    'IT'
);

--@block
ALTER TABLE ROOMS
ADD COLUMN price INT AFTER slot;

-- @block
CREATE TABLE Rooms(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    slot INT
);

-- @block
INSERT INTO Rooms(name, slot, price)
VALUES
    ('Teal', 2, 60),
    ('Orange', 4, 80),
    ('Blue', 4, 80);

--@block
SELECT * FROM Reservations

--@block

Select * FROM RESERVATIONS WHERE NOT
checkin BETWEEN "2022-10-26" AND "2022-10-31" AND NOT
checkout BETWEEN "2022-10-26" AND "2022-10-31"

--@block

Select *
        FROM  ROOMS 

--@block
DELETE FROM ROOMS
WHERE name = "Blue"

--@block
SELECT * FROM Rooms
WHERE NOT name = ALL (
    SELECT room FROM RESERVATIONS
    WHERE ((checkin > "2023-12-18" AND checkin < "2023-12-22")
    AND (checkout >"2023-12-18" AND checkout < "2023-12-22")))
    
--@block

    SELECT *
    FROM Rooms r1
    WHERE name NOT IN (
        SELECT room FROM Reservations
        WHERE NOT (checkout   < '2023-12-18'
                    OR
                    checkin > '2023-12-20'))
   UNION(
        SELECT sum(slot)
        FROM Rooms r2
        WHERE r1.name = r2.name
   )
   



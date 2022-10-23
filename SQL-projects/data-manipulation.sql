CREATE TABLE friends(
  id INTEGER, 
  name TEXT,
  birthday DATE
);

INSERT INTO friends (id, name, birthday)
VALUES (1, 'Ororo Munroe', '1940-05-30');
INSERT INTO friends (id, name, birthday)
VALUES (2, 'Wolf webbie', '1920-04-16');
INSERT INTO friends (id, name, birthday)
VALUES (3, 'Bukola Jas', '1910-03-20');

UPDATE friends
SET name = 'Storm'
WHERE id = 1;

ALTER TABLE friends
ADD COLUMN email TEXT;

UPDATE friends
SET email = 'storm@codecademy.com'
WHERE id = 1;

UPDATE friends
SET email = 'wolf@gmail.com'
WHERE id = 2;

UPDATE friends
SET email = 'jas@gmail.com'
WHERE id = 3;

DELETE fROM friends 
WHERE id = 1;
SELECT * FROM friends;
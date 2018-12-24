BEGIN;

DROP TABLE IF EXISTS restaurants, users, posts, comments CASCADE;

-- First table: Restaurants
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(300) NOT NULL,
  review VARCHAR(500) NOT NULL,
  img_url VARCHAR(500)
);

-- Second table: Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

-- Third table: Posts // Consider NOT NULL for the user_id
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  text TEXT NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id)
);

-- Fourth table: Comments
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id),
  text TEXT NOT NULL,
  rating INTEGER
);

-- Insert restaurants data
INSERT INTO restaurants (name, location, review, img_url) VALUES
(
  'The Faltering Fullback', 
  '19 Perth Rd, Stroud Green, London N4 3HB', 
  'The pub is really cosy! The backyard is really cool. They also sell food (which was actually not that great...)',
  'http://falteringfullback.com/sites/default/files/slides/BACK-BAR-AT-NIGHT.jpg'
),
(
  'Dotori', 
  '3 Stroud Green Rd, London N4 2DQ', 
  'Five star food. Five star service. Impressed by their enthusiasm. Will definitely come back again.',
  'https://www.squaremeal.co.uk/~/media/Images/Restaurants/_DEF/Dotori/Dotori-2017-WEB.jpg'
);

INSERT INTO users (name, password) VALUES
(
  'whoooolia', 
  'password'
),
(
  'zurda', 
  '1qaz2wsx'
),
(
  'sandra', 
  '1234rt'
);

INSERT INTO posts (user_id, text, restaurant_id) VALUES
(
  (SELECT id FROM users WHERE name = 'zurda'), 
  'This restaurant was amazing!',
  (SELECT id FROM restaurants WHERE name = 'Dotori')
),
(
  (SELECT id FROM users WHERE name = 'sandra'), 
  'This restaurant was AMAZEBALLS!',
  (SELECT id FROM restaurants WHERE name = 'The Faltering Fullback')
);

COMMIT;

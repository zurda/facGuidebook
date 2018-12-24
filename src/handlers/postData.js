const databaseConnection = require('../database/db_connection');
const bcrypt = require("bcryptjs");

const hashPassword = (password, cb) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        callback(err);
      } else {
        bcrypt.hash(password, salt, cb);
      }
    });
  };

const postDataRest = (name, location, review, img_url, cb) => {
    databaseConnection.query(
        'INSERT INTO restaurants (name, location, review, img_url) VALUES ($1, $2, $3, $4)',
        [name, location, review, img_url],
        (err, res) => {
            if(err) {
                return cb(err);
            } else {
                cb(null, res);
            }
        }
    );
};

const postDataPosts = (user_id, review, restaurant_id, cb) => {
    databaseConnection.query(
        'INSERT INTO posts (user_id, text, restaurant_id) VALUES ($1, $2, $3)',
        [user_id, review, restaurant_id],
        (err, res) => {
            if(err) {
                return cb(err);
            } else {
                cb(null, res);
            }
        }
    );
};

const postDataUser = (name, password, cb) => {
    hashPassword(password, (err, hashedPassword) => {
        if (err) console.log(err);
        databaseConnection.query(
            'INSERT INTO users (name, password) VALUES ($1, $2)',
            [name, hashedPassword],
            (error, res) => {
                if(err) {
                    return cb(error);
                } else {
                    cb(null, res);
                }
            }
        );
    });       
}

module.exports = {
    postDataRest,
    postDataUser,
    hashPassword,
    postDataPosts
}

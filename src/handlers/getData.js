const dbConnection = require('../database/db_connection.js');

const getRestData = cb => {
  dbConnection.query(`SELECT * FROM restaurants`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const getUserData = cb => {
  dbConnection.query(`SELECT * FROM users`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const getSpecificUser = (name, cb) => {
  dbConnection.query(`SELECT * FROM users WHERE name = '${name}'`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      console.log(res.rows);
      cb(null, res.rows);
    }
  });
}

const promiseSpecificUser = name => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM users WHERE name = '${name}'`, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
}

const promiseSpecificRest = name => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM restaurants WHERE name = '${name}'`, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
}

module.exports = {
  getRestData,
  getUserData,
  getSpecificUser,
  promiseSpecificUser,
  promiseSpecificRest
};

'use strict'

const User = require('./user');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/data.db', (err) => {
});

const createUser = function (row) {
    const id = row.id;
    const name = row.name;
    const surname = row.surname;
    const birthdate = row.birthdate;
    const language = row.language;
    const gender = row.gender;
    const onlineStatus = row.onlineStatus;
    const country = row.country;
    const email = row.email;

  
    return new User(id, name, surname, birthdate, language, gender, onlineStatus, country, email);
  }

exports.getTourist = function (email) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM tourist WHERE email = ?"
      db.all(sql, [email], (err, rows) => {
          console.log("asdfg");
        if (err) 
          reject(err);
        else if (rows.length === 0) 
          resolve(undefined);
        else {
          const user = createUser(rows[0]);
          resolve(user);
        }
      
    });
  });
};
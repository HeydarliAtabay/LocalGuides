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

// exports.uploadProfilePhoto = function(userId, photo) {
//   return new Promise((resolve, reject) => {
//     const query = 'UPDATE tourist SET photo = ? WHERE id = ?';

//     // console.log('photo', photo.name);
//     db.run(query, [photo, userId], function(err, res) {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     })
//   })
// }

exports.uploadPhoto = function(url, userId){

  return new Promise((resolve, reject) => {
    let query = 'UPDATE tourist SET photo = ? WHERE id = ?';
    
    db.run(query, [url, userId], function(err, res) {
            if(err) {
              reject(err);
            } else {
              resolve(res);
            }
    });
  })
}

exports.editDataUser = function(data){

    return new Promise((resolve, reject) => {
      let query = 'UPDATE tourist SET ';
      
      switch (data.header){
        case 'Country': query += "country = '" + data.text.country + "'"; break;
        case 'Name & Surname': query += "name = '" + data.text.name + "' , surname = '" + data.text.surname + "'"; break;
        case 'Birth date': query += "birthdate = '" + data.text.birthdate + "'"; break;
        case 'Gender': query += "gender = '" + data.text.gender + "'"; break;
        case 'Interests': query += "interests = '" + data.text.interests.join(', ') + "'"; break; // add to tabele new column
      }

      query += ' WHERE id = ?';
      console.log(query);
      db.run(query, [data.userId], function(err, res) {
              if(err) {
                reject(err);
              } else {
                resolve(res);
              }
      });
    })
}
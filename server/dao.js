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
    const photo = row.photo;
    const interests = row.interests;
    const rating = row.rating;
    const price = row.price;
    const city = row.city;
    const userType = row.userType;


  
    return new User(id, name, surname, birthdate, language, gender, onlineStatus, country, email, photo, interests, rating, price, city, userType);
  }

exports.getTourist = function (email) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT *, "user-type" as userType FROM users WHERE email = ?'
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

exports.uploadPhoto = function(url, userId){

  return new Promise((resolve, reject) => {
    let query = 'UPDATE users SET photo = ? WHERE id = ?';
    
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
      let query = 'UPDATE users SET ';
      
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

exports.getChats = function(userId){

  return new Promise((resolve, reject) => {
    const query = 'SELECT i.id, i.chatId, i.sender, i.reciever, u.name, u.surname, u.photo, i.message, MAX(i.date) as date '
                + 'FROM inbox i, users u '
                + 'WHERE (i.reciever = ? OR i.sender = ?) AND ' 
                + 'u.id = CASE WHEN i.sender <> ? THEN i.sender '
                            + 'ELSE i.reciever END '
                + 'GROUP by i.chatId ORDER BY i.chatId DESC';
    
    db.all(query, [userId, userId, userId], function(err, rows) {
            if(err) {
              reject(err);
            } else if (rows.length === 0) 
              resolve(undefined);
            else {
              resolve(rows);
            }
    });
  })
}

exports.getChat = function(chatId){

  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM inbox WHERE chatId = ?';
    
    db.all(query, [chatId], function(err, rows) {
            if(err) {
              reject(err);
            } else if (rows.length === 0) 
              resolve(undefined);
            else {
              resolve(rows);
            }
    });
  })
}

exports.storeMessage = function(message){

  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO inbox (sender, reciever, message, date, chatId) VALUES(?, ?, ?, DATETIME("now"), ?)';
    
    db.run(query, [message.sender, message.reciever, message.body, message.chatId], function(err, row) {
            if(err) {
              reject(err);
            }
            else {
              resolve(null);
            }
    });
  })
}

exports.getGuide = function(id){

  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE id = ? AND "user-type" = "guide"';
    
    db.get(query, [id], function(err, row) {
            if(err) {
              reject(err);
            } 
            else {

                // get languages
                const sql = "SELECT l.name FROM languages l, guideLanguage g WHERE g.language = l.id AND g.guide = ?"
                db.all(sql, [id], function(err, rows) {
                  if(err) {
                    reject(err);
                  } 
                  else {
                    if(row){
                      row.language = rows.map(function(elem){
                        return elem.name;
                      });
                    }
                    
                    resolve(row);
                  }
                });
            }
    });
  })
}

exports.getGuideList = function(city){

  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE city = ? AND "user-type" = "guide" ORDER BY rating DESC';
    
    db.all(query, [city], function(err, rows) {
            if(err) {
              reject(err);
            }
            else {
              resolve(rows);
            }
    });
  })
}

exports.getMyList = function(id){

  return new Promise((resolve, reject) => {
    const query = 'SELECT * from myTrips LEFT JOIN users on myTrips.Guide=users.id where myTrips.user=? ORDER By id DESC';
    db.all(query, [id], function(err, rows) {
            if(err) {
              reject(err);
            } else if (rows.length === 0) 
              resolve(undefined);
            else {
              resolve(rows);
            }
    });
  })
}

exports.sendTripRequest = function(StartDate, EndDate,Guide,City,TouristCount,Status,user){
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO myTrips (StartDate, EndDate, Guide, City, TouristCount, Status, user) VALUES(?,?,?,?,?,?,?)';
    db.run(query, [StartDate, EndDate,Guide,City,TouristCount,Status,user], function(err, row) {
            if(err) {
              reject(err);
            }
            else {
              resolve(null);
            }
    });
  })
}

exports.acceptRequest = function(user, guide){
  return new Promise((resolve, reject) => {
    let query = 'UPDATE myTrips SET status = "accepted" WHERE user = ? and guide = ?';
    db.run(query, [user, guide], function(err, res) {
            if(err) {
              reject(err);
            } else {
              resolve(res);
            }
    });
  })
}

exports.filterRequest = function(price, rating){
return new Promise((resolve, reject) => {
  const query = 'SELECT * FROM users WHERE price<=? and rating>=? AND "user-type" = "guide" ORDER By rating DESC';
  db.all(query, [price, rating], function(err, rows) {
          if(err) {
            reject(err);
          } else if (rows.length === 0) 
            resolve([]);
          else {
            resolve(rows);
          }
  });
})
}

exports.addRating = function(rating){

  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO rating (guide_id, user_id, rating, comment) VALUES(?, ?, ?, ?)';
    console.log("sada:" + rating.user_id)
    db.run(query, [rating.guide_id, rating.user_id, rating.rating, rating.comment], function(err, row) {
            if(err) {
              reject(err);
            }
            else {
              resolve(null);
            }
    });
  })
}



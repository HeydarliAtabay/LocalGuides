class User {
    constructor(id, name, surname, birthdate, language, gender, onlineStatus, country, email) {
      if (id) 
      this.id = id;
      this.name = name;
      this.surname = surname;

      this.birthdate = birthdate;
      this.language = language;
      this.gender = gender;
      this.onlineStatus = onlineStatus;
      this.country = country;
      this.email = email;

    }
  }
  
  module.exports = User;
  
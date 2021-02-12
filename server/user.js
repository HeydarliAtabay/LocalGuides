class User {
    constructor(id, name, surname, birthdate, language, gender, onlineStatus, country, email, photo, interests, rating, price, city, userType) {
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
      this.photo = photo;
      this.interests = interests;
      this.rating = rating;
      this.price = price;
      this.city = city;
      this.userType = userType;

    }
  }
  
  module.exports = User;
  
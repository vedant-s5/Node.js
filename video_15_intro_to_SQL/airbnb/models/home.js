
const db = require("../utils/databaseUtil");


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description
    this.id = id
  }

  save() {
    
    if (this.id){ //update
      return db.execute(
        `UPDATE homes SET houseName=?, price=?, location=?, rating=?, photoUrl=?, description=? WHERE id=?`,[this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description, this.id])

    } else {// insert
      return db.execute("INSERT INTO homes(houseName, price, location, rating, photoUrl, description) VALUES (?,?,?,?,?,?)",[this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description])
    }
  }

static fetchAll() {
  return db.execute('SELECT * FROM homes') 
}


static finById(homeId){
    return db.execute('SELECT * FROM homes WHERE id=?',[homeId]) 

}


static deleteById(homeId){
  return db.execute('DELETE FROM homes WHERE id=?',[homeId]) 
  }

}


//database is imported

// jo bo db ki query dalni hai vo dal skte hai ham ab

/* thi return our data as well as which field represents which and its datatype but
we do not want that islia ham array destructuring use kr rhe hai yha pe*/
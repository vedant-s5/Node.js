
const { ObjectId } = require('mongodb');
const { getDB } = require('../utils/databaseUtil');


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description
    if (_id){
      this._id = _id // agar _id main koi mila ho koi id ho tabi usko assign kre verna na kre 
    }
  }

  save() {
    const updateFields = {
    houseName: this.houseName,
    price: this.price,
    location: this.location,
    rating: this.rating,
    photoUrl: this.photoUrl,
    description: this.description
};

    const db = getDB()
    if (this._id) {//upadte
      return db.collection("homes").updateOne({_id: new ObjectId (String(this._id))}, {$set: updateFields }); //this se updated columns le lega vo ki kya update hua hai

    }else {
      return db.collection("homes").insertOne(this);
    }
    
  }

static fetchAll() {
  const db = getDB()
  return db.collection("homes")
  .find()
  .toArray()

}


static finById(homeId){
  console.log(homeId);
  
  const db = getDB()
  return db.collection("homes")
  .find({_id: new ObjectId (String(homeId))})
  .next()

}


static deleteById(homeId){
  const db = getDB()
  return db.collection("homes")
  .deleteOne({_id: new ObjectId (String(homeId))})
  }

}


//database is imported

// jo bo db ki query dalni hai vo dal skte hai ham ab

/* thi return our data as well as which field represents which and its datatype but
we do not want that islia ham array destructuring use kr rhe hai yha pe*/

/* ham agar compass main dekhe to id hamari object ki form main ayi hai but 
abi ham usko string ki form main access kr rhe hai, to ham use object main convert
krenge*/
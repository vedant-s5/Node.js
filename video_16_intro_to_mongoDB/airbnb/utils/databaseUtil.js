const mongo = require('mongodb')

const MongoClient = mongo.MongoClient; //model

const MONGO_URL = "mongodb+srv://root:root@completecoding.grlj7pg.mongodb.net/?retryWrites=true&w=majority&appName=completeCoding" 

let _db;

const mongoConnect = (callback) => {
MongoClient.connect(MONGO_URL).then(client => {
  callback()
  _db = client.db('airbnb')
}).catch(err => {
  console.log("error occurred while connecting to Mongo: ", err);
})
}

const getDB = () => {
  if(!_db) {
    throw new Error("Mongo not connected")
  }
  return _db
}

exports.getDB = getDB
exports.mongoConnect = mongoConnect;

//url ke basis per ham connect krne wale hai

/* abi ham apne file ko mongo se connect krenge is url ke 
through uske baad ham error handle bi krenge phir, ham use aise call krenge ki ham use khi per bi
call kr paye verna ye ek bar run hoke ruk jayega*/

/* abi hamne client se connect kr lia hai but abi hamne use use krna start nhi kia 
hai to ab ham usse use krna start krenge*/

/*getBD islia create krenge khi connection se pehle to hamare function
ko call to nhi krra hai ya connection 
fail hogya hai uske baad bi call krra hai*/


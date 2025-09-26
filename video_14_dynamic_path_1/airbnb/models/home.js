// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this)
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

/* we will call all the home in findById and uske baad ham id ke thorugh individul home ki info le lenge*/
static finById(homeId,callback){
  this.fetchAll(homes => {
    const homeFound = homes.find(home => home.id === homeId);
    callback(homeFound);
  })
}

};

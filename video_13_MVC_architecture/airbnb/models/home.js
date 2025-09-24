//core modules
const fs = require('fs');// file writing ke lia
const path = require('path')
const rootdir = require('../utils/path_util');
const { root } = require('postcss');



module.exports = class Home{
  constructor(house, price, location, rating,photoUrl){
    this.house = house
    this.price = price
    this.location = location
    this.rating = rating
    this.photoUrl
  }

  save(){
    Home.fetchAll(registeredHome => {
        registeredHome.push(this)
        const filePath = path.join(rootdir,'data',  
          'homes.json')
        fs.writeFile(filePath, JSON.stringify   (registeredHome), (err) => {
          console.log(err);

      })
    })
    
  } 
  /* ye jo bi data ayega ise hamare fake database main save kr lega..yha pe registerhome ko object 
  banake usko save krne ki koshish kri ja rhi hai*/

  /* agar hame koi function bana hai jo direct hamare is object 
  se related na ho but class se related ho uske lia 
  static use krenge*/

  static fetchAll(callback){
    const filePath = path.join(rootdir,'data','homes.json')
    fs.readFile(filePath, (err,data) => {
      console.log("file read", err,data);
      callback(!err ? JSON.parse(data) : [] );
    });
  }
}

/* ab isko run krne pe ye hame error null dera ha aur data ko buffer ki form main de rha hai
      to ab ham data ko convert krenge.*/

/*first time jab ham file ko run krenge to uske pass data to koi hoga hi nhi islia
      uske lia ham error handling krke rkhenge pehle se hi jisse hamara code na fhate*/ 

 /* ab ye kya krega ki jo bi fetchAll ko call krega usko ye 
  registeredHome ka sara data de dega*/
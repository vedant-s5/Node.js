const Home = require('../models/home')

exports.getAddHome = (req,res,next) => {
  res.render('add-home', {
    pageTitle: 'add home to airbnb',
    currentPage: 'add-home'
  })
}

// const registeredHome = [];
/* ye jo resgister home ka kam hai ye model ka hota hai kyuki iske andar
ham user ki details ko show krre hai aur, database ki chizo ke sath models deal krte hai, to ise ham yha se hata denge*/

exports.postHomeAdded = (req,res,next) => {

  //destructuring
  const { house, price, location, rating, photoUrl} = req.body;

  const home = new Home(house, price, location, rating,photoUrl)

  home.save();

  res.render('home-added', {pageTitle: 'home added successfully.', currentPage: 'added-home'})
}



exports.getHomePage = (req, res) => {
  const registeredHome = Home.fetchAll( (registeredHome) => 
    res.render('home',{
      registeredHome: registeredHome, 
      pageTitle: 'airbnb Home', 
      currentPage: 'home'
    })
  )
}



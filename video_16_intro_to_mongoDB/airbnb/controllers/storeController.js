const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  })
};

exports.getHomes = (req, res, next) => {
Home.fetchAll().then(registeredHomes => {    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  })
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites().then(favourites => {
Home.fetchAll().then(registeredHomes => {     
  console.log(favourites,registeredHomes);
  
   const favouriteHomes = registeredHomes.filter(home => favourites.includes(home._id))
    res.render("store/favourite-list", {
      favouriteHomes: favouriteHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    })
  });
  })
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.homeId;
  const fav = new Favourite(homeId);

  fav.save().then(result => {
    console.log('Fav added: ', result);
  })
  .catch(err => {
    console.log("Error while marking favourite: ", err);
  })
  .finally(() => {
    res.redirect("/favourites");
  });
};


exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId
  console.log("this is home id", homeId);
  Home.finById(homeId).then(homes => {
    if(!homes){
      console.log("home not found");
      
      res.redirect('/homes')
    }
    else {
      console.log("home id found", homes);
    res.render("store/home-detail", {
    home: homes,//home details hai vo is home page pe jo hone hai usko use kr paye
    pageTitle: "Home Details",
    currentPage: "Home"
    })
    }
  })
};


exports.postRemoveFromFavourite = (req,res,next) =>{
  const homeId = req.params.homeId
  Favourite.deleteById(homeId, err => {
    if (err){
      console.log("error while removing from favs",err)
    }
    res.redirect("/favourites")
  })
  
}


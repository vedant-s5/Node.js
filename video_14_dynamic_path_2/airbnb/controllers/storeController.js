const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites(favourites => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id))
    res.render("store/favourite-list", {
      favouriteHomes: favouriteHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    })
  });
  })
};

exports.postAddToFavourite = (req,res,next) =>{
  console.log("came to add to favourite",req.body);
  Favourite.addToFavourite(req.body.homeId, error => {
    if(error){
      console.log("Error while marking favourites:",error);
      
    }
    res.redirect("/favourites");
  })
  
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId
  console.log("this is home id", homeId);
  Home.finById(homeId, home => {
    if(!home){
      console.log("home not found");
      
      res.redirect('/homes')
    }
    else {
      console.log("home id found", home);
    res.render("store/home-detail", {
    home: home,//home details hai vo is home page pe jo hone hai usko use kr paye
    pageTitle: "Home Details",
    currentPage: "Home"
    })
    }
  })
};
/*hamne yha apne home id find krne ke lia call back banaya, jisse ki
jab hamara model hamare home ko dhund le id ke through uske baad
yha pe aake hamari home ki detail render kr de...
iske baad agar ghar nhi mila to wapas home page pe 
user ko bhej de ki home not found.*/

exports.postRemoveFromFavourite = (req,res,next) =>{
  const homeId = req.params.homeId
  Favourite.deleteById(homeId, err => {
    if (err){
      console.log("error while removing from favs",err)
    }
    res.redirect("/favourites")
  })
  
}

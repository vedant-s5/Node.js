const { Result } = require("postcss");
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};


exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true'; // yha pe hame ye flag add krna padega jisse use pta chle ki editing mode main khulna hai ya add home wale mode main kyuki hamne page to same hi use kra hai
  Home.finById(homeId).then(homes => {
    if (!homes) {
      console.log("home not found for eidting");
      res.redirect("/host/host-home-list")
    }else{
      console.log(homeId, editing, homes);
      res.render("host/edit-home", {
        home: homes,
        pageTitle: "Edit your Home",
        currentPage: "host-homes",
        editing: editing,
      });
    }
  })
  
  
  
};



exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl, description);
  home.save().then(() => {
    console.log("home saved successfully")
  })

    res.redirect("host/host-home-list")

};


exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl, description, id);
  home.save().then(result => {
    console.log("home updated",result);
    
  })

  res.redirect("/host/host-home-list")
};


exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId
  console.log("came to delete home id", homeId);
  Home.deleteById(homeId).then(() => {
    res.redirect("/host/host-home-list")
  }).catch(error => {
    console.log("error while deleting",error);
  });
  
}
var express = require ("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
var mongoose = require("mongoose");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/yelp_camp")

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description:String
});
var Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create({
//    name: "Waikiki",
//   image: "no image",
//   description:"It the best"
// },
//   function(err,campground){
//   if (err){
//       console.log(err);
// }else{
//                   console.log("New campground create")
//                   }
//       }

//                  )


app.get("/", function(req, res){
  res.render("landing")
})

app.get("/campgrounds", function(req, res){
  //Get all campgrounds from db
  Campground.find({}, function(err, allCampgrounds){
   if(err){
        console.log(err);
  } else {res.render("campgrounds", {campgrounds:allCampgrounds})
                  }
                  });
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name:name, image:image};
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err)
      
    }else {
      res.redirect("/campgrounds")
    }
});
});
app.get("/campgrounds/new", function(req,res){
  res.render("new.ejs")
})

app.get("/campgrounds/:id", function (req,res){
  res.send("This will be the show page one day.")
});

app.listen(3000, function(){
  console.log("Server has started");
});
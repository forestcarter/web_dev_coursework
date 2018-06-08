var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema= new mongoose.Schema({
  name:String,
  age: Number,
  temperment: String
});

var Cat = mongoose.model("Cat", catSchema);
// add new cat

// var george = new Cat({
//   name:"Mrs. Norris",
//   age:55,
//   temperment:"Evil"
// });

// george.save(function(err, cat){
//      if (err){
//        console.log("Something went wrong!")
//       } else{ console.log("We Saved a Cat")
//              console.log(cat);
//              }
//                       })

//retrieve all cats and log each one
Cat.find({}, function(err, cats){
  if(err){
    console.log("We have an error");
    console.log(err);
    } else{
      console.log("All the cats.....");
      console.log(cats);
    }
}) ;

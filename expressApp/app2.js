var express = require('express');
var app = express();


app.get("/", function(req, res){
  res.send("Hi There, Welcome!")
});

app.get("/speak/:animal", function(req, res){
  var animalDict = {"cow": "moo",
                 "dog": "woof",
                 "pig": "oink",
                 "horse": "ney",
                 "bird": "Chirp"
                 } 
  myanimal = req.params.animal;
  mynoise= animalDict[myanimal]
  res.send("the "+myanimal+" says "+mynoise)
});


app.get("/repeat/:word/:num", function(req, res){
  var mynum=Number(req.params.num);
  var mystring=req.params.word;
  var myfinalstring  = "";
  for(i=0; i<mynum; i++){
   myfinalstring =myfinalstring + " " +mystring;
}
  res.send(myfinalstring);
  
});

app.get("*", function(req, res){
   res.send("You missed the iPony!");
});

console.log(process.env.PORT)
app.listen(3000, function(){
  console.log("Server has started")
});
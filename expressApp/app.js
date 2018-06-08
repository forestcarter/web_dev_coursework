var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi There!");
  });

app.get("/bye", function(req, res){
  res.send("see you, you made it!");
  });

app.get("/dog", function(req, res){
  res.send("woof");
  });
app.get("*", function(req, res){
  res.send("No existe");
  });

  
console.log(process.env.PORT)
app.listen(3000, function(){
  console.log("Server has started")
});
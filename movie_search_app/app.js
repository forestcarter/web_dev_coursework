var express = require("express");
var app = express();
var request = require("request");
app.set ("view engine", "ejs");

app.get("/", function(req, res){
  res.render("search");
});

app.get("/results", function(req, res){
  var query = req.query.search
  var url1 = "http://www.omdbapi.com/?s="
  var url2 = query
  var url3 = "&apikey=thewdb"
  request(url1 + url2 +url3, function(error, response, body){
    if (!error && response.statusCode == 200){
      var data = JSON.parse(body) 
      res.render("results", {data:data});
    }  
  });
  
});


app.listen(3000, function(){
  console.log("Server has started")
});
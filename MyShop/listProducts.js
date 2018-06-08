var faker = require('faker');

for(i=0; i<10; i++){
  var randomName = faker.commerce.productName(); // Rowan Nikolaus
  var randomPrice = faker.commerce.price(); // Kassandra.Haley@erich.biz
  console.log(randomName+" costs "+ randomPrice)
  
}

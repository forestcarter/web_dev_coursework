function average(myarray){
  total=0;
  for(i=0;i<myarray.length; i++){
    total+=myarray[i];
  }
    myaverage=total/myarray.length;
    console.log(myaverage);
  
}

var scores1 = [91, 92, 92]
var scores2 = [91, 92, 100]
average(scores1);
average(scores2);
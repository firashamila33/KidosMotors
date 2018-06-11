const fetchedCars = require('../cars.js');

module.exports = app => {
  app.get('/api/cars',(req, res) => {
    res.send(fetchedCars);
  });

  app.post('/api/carfilter',(req,res)=>{
    console.log('**********************************');
    console.log(req.body);
    console.log('**********************************');
    var {condition,body,make,year,transition}=req.body;
    var result = {};

    result=fetchedCars;
    if(condition != undefined && condition !=='')
    result = result.filter(function(car){
      return (car.condition === condition)
    })
    if(body != undefined && body !=='')
    result = result.filter(function(car){
      return (car.body === body)
    })
    if(make != undefined && make !=='')
    result = result.filter(function(car){
      return (car.make === make)
    })
    if(year != undefined && year !=='')
    result = result.filter(function(car){
      return (car.year === year)
    })
    if(transition != undefined && transition !=='')
    result = result.filter(function(car){
      return (car.transition === transition)
    })
    res.send(result) ;
  });     
};

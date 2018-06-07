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
    if(condition != undefined)
    result = result.filter(function(car){
      return (car.condition === condition)
    })
    if(body != undefined)
    result = result.filter(function(car){
      return (car.body === body)
    })
    if(make != undefined)
    result = result.filter(function(car){
      return (car.make === make)
    })
    if(year != undefined)
    result = result.filter(function(car){
      return (car.year === year)
    })
    if(transition != undefined)
    result = result.filter(function(car){
      return (car.transition === transition)
    })
    res.send(result) ;
  });     
};

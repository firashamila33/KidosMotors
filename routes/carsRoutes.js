const fetchedCars = require('../cars.js');

module.exports = app => {
  app.get('/api/cars',(req, res) => {
    res.send(fetchedCars);
  });

  app.post('/api/carfilter',(req,res)=>{
    console.log('**********************************');
    console.log(req.body);
    console.log('**********************************');
    var {condition,body,make,year,transition,priceRange}=req.body;
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


    var min = 1000 * priceRange.slice(1, priceRange.indexOf(","));
    var max = 1000 * priceRange.slice(priceRange.indexOf("-") + 3, priceRange.indexOf(",", priceRange.indexOf("-")));
    
    console.log(min);
    console.log(max);
    if(priceRange != undefined && priceRange !=='')
    result = result.filter(function(car){
      console.log(parseInt(car.price,10) <= max && parseInt(car.price,10) >=min)
      return (parseInt(car.price,10) <= max && parseInt(car.price,10) >=min)
    })
    res.send(result) ;
  });     
};

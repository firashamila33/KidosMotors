const fetchedCars = require('../cars.js');

module.exports = app => {
  app.get('/api/cars',(req, res) => {
    res.send(fetchedCars);
  });



  app.post('/api/carfilter',(req,res)=>{
    console.log('**********************************');
    console.log(req.body);
    console.log('**********************************');
    res.send(fetchedCars.slice(1,4)) ;
  });     
};

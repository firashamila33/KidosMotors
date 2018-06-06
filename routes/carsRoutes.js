const fetchedCars = require('../cars.js');

module.exports = app => {
  app.get('/api/cars',(req, res) => {
    res.send(fetchedCars);
  });

  app.get('/api/car/:id',(req, res) => {
    console.log(req.url.split(':')[1]);
    fetchedProducts.map.filter
    res.send(
      fetchedProducts.filter((car)=>car._id==req.url.split(':')[1])[0]
    );
  });

  app.get('/api/carfilter',(req,res)=>{
    console.log('**********************************');
    console.log(req.body);
    console.log('**********************************');
    res.send(JSON.stringify(req)) ;
  });     
};

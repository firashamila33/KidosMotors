const fetchedProducts = require('../products.js');

module.exports = app => {
  app.get('/api/products',(req, res) => {
    res.send(fetchedProducts);
  });

  app.get('/api/product/:id',(req, res) => {    
    res.send(
      fetchedProducts.filter((product)=>product._id==req.url.split(':')[1])[0]
    );
  });
};

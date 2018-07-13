const mongoose = require('mongoose');
const fetchedProducts = require('../products.js');
const {URL} = require('url');

const Product = mongoose.model('Product');
const Category = mongoose.model('Category');

module.exports = app => {
    app.get('/api/products/:category', (req, res) => {
        res.send(
            fetchedProducts.filter((product) => product.category == (req.url.split(':')[1]))
        );
    });

    app.get('/api/product/:id', (req, res) => {
        res.send(
            fetchedProducts.filter((product) => product._id == req.url.split(':')[1])[0]
        );
    });

    app.post('/api/admin/product', (req, res) => {
        const {
            title,
            price,
            oldPrice,
            briefDescription,
            brand,
            code,
            manufactor,
            color,
            availability,
            quantity,
            description,
            photosPath
        } = req.body.product;
        const product = new Product(
            {
                title,
                price,
                oldPrice,
                briefDescription,
                brand,
                code,
                manufactor,
                color,
                availability,
                quantity,
                description,
                photosPath
            });
        const category = new Category({
            name: req.body.category.name
        });
        category.save(function (err) {
            product.productCategory = category;
            product.save(function (err) {
                console.log(err ? err : "C'est bon");
            });
        });
        res.send({});
    });

    app.get('/api/admin/product', (req, res) => {
        Product.find({}).populate('productCategory').exec(function (err, products) {
            if (err) return handleError(err);
            res.send(products);
        });
    });

    app.delete('/api/admin/delete/product/:id', (req, res) => {
        const id = req.url.split(':')[1];
        Product.remove({_id: id}, function (err) {
            if (err) return handleError(err);
            Product.find({}).populate('productCategory').exec(function (err, products) {
                if (err) return handleError(err);
                res.send(products);
            });
        });
    });
};

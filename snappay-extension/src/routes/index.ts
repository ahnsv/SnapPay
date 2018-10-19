import express = require('express');
import fs = require('fs');
import productsJson from '../data/products.json'

let router = express.Router();
let Cart = require('../models/cart');
let products = JSON.parse(fs.readFileSync(productsJson, 'utf8'));

router.get('/', function (req, res, next) {
    res.render('index',
        {
            title: 'NodeJS Shopping Cart',
            products: products
        }
    );
});

router.get('/add/:id', function (req: any, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var product = products.filter(function (item: any) {
        return item.id == productId;
    });
    cart.add(product[0], productId);
    req.session.cart = cart;
    res.redirect('/');
});

router.get('/cart', function (req: any, res, next) {
    if (!req.session.cart) {
        return res.render('cart', {
            products: null
        });
    }
    var cart = new Cart(req.session.cart);
    res.render('cart', {
        title: 'NodeJS Shopping Cart',
        products: cart.getItems(),
        totalPrice: cart.totalPrice
    });
});

router.get('/remove/:id', function (req: any, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.remove(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});
export = router;
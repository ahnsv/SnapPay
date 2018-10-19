import * as express from 'express'

let Cart = require('../models/cart');

export = (() => {
    let r = express.Router();
    r.get('/cart', function (req: any, res, next) {
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
})
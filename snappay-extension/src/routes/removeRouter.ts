import * as express from 'express'
let Cart = require('../models/cart');

export = (() => {
    let r = express.Router();
    r.get('/remove/:id', function (req: any, res, next) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        cart.remove(productId);
        req.session.cart = cart;
        res.redirect('/cart');
    });
})
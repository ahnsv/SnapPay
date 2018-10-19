import * as express from 'express'
import fs = require('fs');
import productsJson from "../../src/data/products.json"
let Cart = require('../models/cart');
let products = JSON.parse(fs.readFileSync(productsJson, 'utf8'));

export = (() => {
    let r = express.Router();
    r.get('/add/:id', function (req: any, res, next) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        var product = products.filter(function (item: any) {
            return item.id == productId;
        });
        cart.add(product[0], productId);
        req.session.cart = cart;
        res.redirect('/');
    });
})
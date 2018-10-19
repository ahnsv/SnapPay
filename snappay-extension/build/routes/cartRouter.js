"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var express = __importStar(require("express"));
var Cart = require('../models/cart');
module.exports = (function () {
    var r = express.Router();
    r.get('/cart', function (req, res, next) {
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
});

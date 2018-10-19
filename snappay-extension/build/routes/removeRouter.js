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
    r.get('/remove/:id', function (req, res, next) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.remove(productId);
        req.session.cart = cart;
        res.redirect('/cart');
    });
});

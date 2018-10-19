"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express = __importStar(require("express"));
var fs = require("fs");
var products_json_1 = __importDefault(require("../../src/data/products.json"));
var Cart = require('../models/cart');
var products = JSON.parse(fs.readFileSync(products_json_1.default, 'utf8'));
module.exports = (function () {
    var r = express.Router();
    r.get('/add/:id', function (req, res, next) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        var product = products.filter(function (item) {
            return item.id == productId;
        });
        cart.add(product[0], productId);
        req.session.cart = cart;
        res.redirect('/');
    });
});

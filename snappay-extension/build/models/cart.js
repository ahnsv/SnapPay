"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = (function () {
    function Cart(cart) {
        this.items = cart.items;
        this.totalItems = cart.totalItems;
        this.totalPrice = cart.totalPrice;
    }
    Cart.prototype.add = function (item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            this.items[id] = { item: item, quantity: 0, price: 0 };
            cartItem = this.items[id];
        }
        cartItem.quantity++;
        cartItem.price = cartItem.item.price * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += cartItem.item.price;
    };
    Cart.prototype.remove = function (id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    Cart.prototype.getItems = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
    return Cart;
}());
exports.default = Cart;

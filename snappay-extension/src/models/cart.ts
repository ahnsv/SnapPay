// TODO: better item interface
export default interface ItemMap {
    [key: number]: {item: {quantity: number, price: number}, quantity: number, price: number}
}

export default class Cart {
    items: ItemMap;
    totalItems: number;
    totalPrice: number;
    constructor(cart: {items: ItemMap, totalItems: number, totalPrice: number}) {
        this.items = cart.items;
        this.totalItems = cart.totalItems;
        this.totalPrice = cart.totalPrice;
    }
    add(item: {quantity: number, price: number}, id: number) {
        let cartItem = this.items[id];
        if (!cartItem) {
            this.items[id] = {item: item, quantity: 0, price: 0};
            cartItem = this.items[id]
        }
        cartItem.quantity++;
        cartItem.price = cartItem.item.price * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += cartItem.item.price;
    }
    remove(id: number) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id]
    }
    getItems(): {quantity: number, price: number}[] {
        let arr = [];
        for (let id in this.items) {
            arr.push(this.items[id])
        }
        return arr;
    } 
}
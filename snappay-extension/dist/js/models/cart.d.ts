export default interface ItemMap {
    [key: number]: {
        item: {
            quantity: number;
            price: number;
        };
        quantity: number;
        price: number;
    };
}
export default class Cart {
    items: ItemMap;
    totalItems: number;
    totalPrice: number;
    constructor(cart: {
        items: ItemMap;
        totalItems: number;
        totalPrice: number;
    });
    add(item: {
        quantity: number;
        price: number;
    }, id: number): void;
    remove(id: number): void;
    getItems(): {
        quantity: number;
        price: number;
    }[];
}

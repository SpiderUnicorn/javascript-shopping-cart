var CartItem = (function() {
    'use strict';

    var Item = function() {

        this.price = 0;
        this.quantity = 0;
        this.subTotal = function() {
            return this.price * this.quantity;
        }

    };

    return Item;
}());

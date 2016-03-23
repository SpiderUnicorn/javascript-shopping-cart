var ShoppingCart = (function() {
    'use strict';

    function ShoppingCart() {
        this.products = [];
    }

    /**
     * Sum
     * @returns {number} The sum of all items with their respective quantities
     */
    ShoppingCart.prototype.sum = function() {
        var sum = 0;
        this.products.forEach(function(product) {
            sum += product.price * product.quantity;
        });
        return sum;
    };

    /**
     * Add a product
     * @param {object} product Adds a product to the cart.
     *                         If the product allready exists, the quantity
     *                         will be incremented instead.
     */
    ShoppingCart.prototype.addProduct = function(product) {
        if (this.products.indexOf(product) != -1) {
            product.quantity++;
        } else {
            product.quantity = 1;
            this.products.push(product);
        }
    };

    /**
     * Remove a product
     * @param {object} product Removes a product from the cart
     */
    ShoppingCart.prototype.removeProduct = function(product) {
        this.products.splice(this.products.indexOf(product), 1);
    };

    /**
     * Increment quantity
     * @param {object} product Increments the product quantity by 1
     */
    ShoppingCart.prototype.incrementQuantity = function(product) {
        product.quantity++;
    };

    /**
     * Decrement quantity
     * @param {object} product Decrements the product quantity by 1
     */
    ShoppingCart.prototype.decrementQuantity = function(product) {
        product.quantity--;
        if (product.quantity < 1) {
            this.removeProduct(product);
        }
    };

    /**
     * Get an item
     * @param   {object} p Product to retrieve
     * @returns {object} Product Retrieved product
     */
    ShoppingCart.prototype.item = function(p) {
        return this.products.filter(function(product) {
            return product === p;
        })[0];
    };

    return ShoppingCart;

}());

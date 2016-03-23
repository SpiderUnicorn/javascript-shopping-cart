/*global beforeEach, afterEach */
/*global describe, it, expect */
(function() {
    'use strict';

    describe('ShoppingCart', function() {
        var cart;

        beforeEach(function() {
            cart = new ShoppingCart();
        });

        it('can be created', function() {
            expect(cart).toBeDefined();
        });

        describe('Sum', function() {
            it('is increased by the price of a product added', function() {
                var product = {
                    price: 100
                };
                cart.addProduct(product);
                expect(cart.sum()).toEqual(product.price);
            });

            it('is decreased by the price of a product removed', function() {
                var product = {
                    price: 100
                };
                var initialValue = 500;

                cart.addProduct({
                    price: initialValue
                });
                cart.addProduct(product);
                cart.removeProduct(product);

                expect(cart.sum()).toEqual(initialValue);
            });

            it('reflects all products and their quantities', function() {
                var productOne = {
                    price: 100
                };
                var productTwo = {
                    price: 500
                };
                var expectedTotal = (productOne.price * 2) + productTwo.price;

                cart.addProduct(productOne);
                cart.addProduct(productOne);
                cart.addProduct(productTwo);

                expect(cart.sum()).toEqual(700);
            });
        });

        describe('Adding products', function() {
            it('new products get a quantity of 1', function() {
                var product = {};
                cart.addProduct(product);

                expect(cart.item(product).quantity).toBe(1);
            });

            it('existing products get quantities increased', function() {
                var product = {};
                cart.addProduct(product);
                cart.addProduct(product);

                expect(cart.item(product).quantity).toBe(2);
                expect(cart.products.length).toBe(1);
            });
        });

        describe('Removing products', function() {
            it("removed products can't be accessed", function() {
                var product = {};

                cart.addProduct(product);
                cart.removeProduct(product);

                expect(cart.item(product)).toBeUndefined();
            });

            it('If a product quantity reaches 0 it is removed', function() {
                var product = {};

                cart.addProduct(product);
                cart.decrementQuantity(product);

                expect(cart.item(product)).toBeUndefined();
            });
        });

        describe('Item quantity', function() {
            it('can be increased', function() {
                var product = {};

                cart.addProduct(product);
                cart.incrementQuantity(product);

                expect(cart.item(product).quantity).toBe(2);
            });

            it('can be decreased', function() {
                var product = {};

                cart.addProduct(product);
                cart.incrementQuantity(product);
                cart.incrementQuantity(product);
                cart.decrementQuantity(product);

                expect(cart.item(product).quantity).toBe(2);
            });
        });
    });
}());

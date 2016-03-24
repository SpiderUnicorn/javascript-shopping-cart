var gulp = require('gulp');
var plato = require('plato');

gulp.task('plato', function() {
    var files = [
        'lib/ShoppingCart.js',
    ];

    var outputDir = './report';
    var options = {
        title: 'Shopping Cart'
    };

    var callback = function(report) {

    };

    plato.inspect(files, outputDir, options, callback);
});

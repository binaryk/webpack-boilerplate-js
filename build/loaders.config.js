'use strict';
var path = require('path');

module.exports = [
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
            presets: ['es2015']
        }
    },
    {
        test: /\.less$/,
        loader: "style!css!less"
    }
]
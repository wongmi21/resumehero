/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/app'
    ],
    output: {
        path: __dirname,
        filename: 'app.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }]
    }
};
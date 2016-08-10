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
            include: __dirname + '/src'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.js$/,
            minimize: true
        })
    ]
};
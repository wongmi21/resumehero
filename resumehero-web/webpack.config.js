var webpack = require('webpack');

module.exports = {
    entry: [
        './src/app'
    ],
    devtool: 'eval-source-map',
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
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env':{
    //             'NODE_ENV': JSON.stringify('production')
    //         }
    //     }),
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress:{
    //             warnings: true
    //         }
    //     })
    // ]
};
const webpack = require('webpack')
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundler.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [
            {
                teste: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets: ['env'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
    
};
const webpack = require('webpack')
const path = require('path')


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/')+'/index.js',
    output: {
        path: path.resolve(__dirname, '../public/'),
        filename: 'bundler.js'
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, '../public/')
    },
    module: {
        rules: [
            {
                test: /\.js($|\?)/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'react']
                    } 
                }
            }
        ]
    }    
}
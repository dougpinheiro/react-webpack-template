const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src')+'/index.js',
    output: {
        path: path.resolve(__dirname, '../src/public'),
        filename: 'bundler.js'
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, '../src/public')
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
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js($|\?)/i
            })
        ]
    }
}
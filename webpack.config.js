const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: "development",
    entry: path.resolve('src')+'/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundler.js'
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env", "babel-preset-react"]
                    }
                }
            }
        ]
    }   
}
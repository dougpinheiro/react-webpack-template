const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './source.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    plugins: [
        new UglifyJsPlugin({
            test: /\.js($|\?)/i
        })
    ]
    
};
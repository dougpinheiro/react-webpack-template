const path = require('path');

module.exports = {
    entry: './source.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [path.resolve(__dirname, '../node_modules/babel-preset-env')]
                    }
                }

            }
        ]
    }
    
};
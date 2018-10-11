var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './src/react-inline-logic.js',
    output: {
        path: path.resolve('lib'),
        filename: 'react-inline-logic.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
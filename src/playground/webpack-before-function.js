// entry -> output

console.log(__dirname);

const path =require('path');

module.exports = {

    entry: './src/app.js',
    //entry: './src/playground/redux-expensify.js',
    // entry: './src/playground/destructuring.js',
    // entry: './src/playground/higherOrderComponent.js',

    output: {
        path: path.join(__dirname,"public"),
        filename: 'bundle.js'
    },
    module: {



        rules: [{
            test:   /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]

    },

    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname,"public"),
        historyApiFallback: true // this is needed to handel client side routing

    }


};
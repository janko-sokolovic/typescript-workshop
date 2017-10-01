var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var path = require('path');

module.exports = {
    entry: ['./src/app.ts', './src/main.scss'],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.scss']
    },

    devtool: "eval",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: { emitErrors: true }
              },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },{
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /(node_modules)/
            }, {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.template.ejs', inject: 'body' }),
        new ExtractTextPlugin({ filename: "app.bundle.css", allChunks: true })
    ]
};

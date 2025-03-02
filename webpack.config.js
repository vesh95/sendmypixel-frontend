const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production', // или 'development'

    entry: [
        './src/index.js', // Главный файл приложения
        './src/index.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Шаблон для HTML
        }),

        new Dotenv({
            path: __dirname + '/.env',
            systemvars: true,
        }),


        // DefinePlugin для замены переменных окружения
        // new webpack.DefinePlugin({'process.env': JSON.stringify(process.env)}),

    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: '[name].css'}
                    },
                    'sass-loader'
                ]
            }
        ],
    },
};
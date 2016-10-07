'use strict';

const path = require('path');

const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const keys = {
    env: {
        dev: 'development',
        prod: 'production'
    }
};

const NODE_ENV = process.env.NODE_ENV || keys.env.dev;

module.exports = {

    context: __dirname + '/www',

    // entry: './home', // simple variant of 'entry: {..<several entry points>..}'
    entry: {
        'common': './js/common',
        'main': ['./js/main', './css/main']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: '[name]'
    },

    watch: NODE_ENV === keys.env.dev,

    /*
     watchOptions: {
     aggregateTimeout: 100
     },
     */

    devtool: NODE_ENV === keys.env.dev ? 'source-map' : null,

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime'],
                    compact: false
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.dot$/,
                loader: 'dot'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    resolve: {
        modulesDirectories: ['', 'www', 'node_modules'],
        extensions: ['', '.js', '.jsx', '.json', '.scss', '.css', '.dot']
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new ExtractTextPlugin('main.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ]

};


if (NODE_ENV === keys.env.prod) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warning: true,
                drop_console: true,
                unsafe: true
            }
        })
    );
}

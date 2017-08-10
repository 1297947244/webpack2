const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './index',
        //vendor: ['jquery']
    },
    output: {
        path: __dirname + '/',
        filename: 'bundle.js',
    },
    resolve: {
        // modules: [path.join(__dirname, './'), 'node_modules'],
        extensions: ['.js', '.jsx', '.scss', '.css'],
        // alias: {
        //     jquery: 'jquery/dist/jquery.min.js'
        // }
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: [
                        'react',
                        ['es2015', { modules: false }],
                        'es2016',
                        'stage-0'
                    ]
                }
            },
            // {//抽取css
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     modules: true,
            //                     localIdentName: '[local]',
            //                 },
            //             }
            //         ]
            //     }),
            // },
            {//scss转成css，并抽取出来
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader"
                })
            },
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_console: false,
        //     }
        // }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html'),
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js'
        })
    ]
};
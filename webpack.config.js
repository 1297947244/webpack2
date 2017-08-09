const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './index',
    },
    output: {
        path: __dirname + '/',
        filename: 'bundle.js',
    },
    resolve: {
        // modules: [path.join(__dirname, './'), 'node_modules'],
        extensions: ['.js', '.jsx', '.scss', '.css']
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
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[local]',
                            },
                        }
                    ]
                }),
            },
            //转换scss成css，并插入到head中
            // {  
            //     test: /\.(css|scss)$/,  
            //     loader:"style-loader!css-loader!sass-loader"  
            // }  
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html'),
            // chunks: ['index'],
            inject: 'body',
            // staticPath: staticPath
        })
    ]
};
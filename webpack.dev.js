const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const webpack = require('webpack');
module.exports = {
    entry: {
        index: './src/index.js',
        disclosure: './src/disclosure.js',
        echarts: './src/echarts.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

    optimization: {
        splitChunks: {
            chunks: 'async',
            automaticNameDelimiter: '.',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 1
                },
                libs: {
                    test: /[\\/]resources[\\/]js[\\/]/,
                    name: 'libs',
                    minSize: 30000,
                    minChunks: 2,
                    chunks: 'initial',
                    priority: 0,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            name: 'index',
            title: '首页',
            filename: 'index.html',
            template: 'html/index.html',
            chunks: ['manifest', 'index']
        }),
        new HtmlWebpackPlugin({
            name: 'disclosure',
            title: '信息公示',
            filename: 'disclosure.html',
            template: 'html/disclosure.html',
            chunks: ['manifest', 'disclosure']
        }),
        new HtmlWebpackPlugin({
            name: 'echarts',
            title: 'echarts图标学习',
            filename: 'echarts.html',
            template: 'html/echarts.html',
            chunks: ['manifest', 'echarts']
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ProgressBarPlugin({
            format: chalk.green('Progressing') + '[:bar]' + chalk.green(':percent') + '(:elapsed seconds)',
            clear: false
        })
    ],
}
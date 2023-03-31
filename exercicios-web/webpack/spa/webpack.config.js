const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    devServer: {
        static: {
            directory: './build'
        },
        compress:true,
        port: 9000
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'build')
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'estilo.css' }),
        new CopyWebpackPlugin({
            patterns: [
                { context: 'src/', from: 'paginas/*.html' },
                { context: 'src/', from: 'assets/imgs/*.*' }
            ]
        })
    ],
    module: {
        rules: [{
            test: /\.html$/, loader: 'html-loader'
        }, {
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
                // 'postcss-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset/resource'
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)$/,
            type: 'asset/resource'
        }]
    }
}
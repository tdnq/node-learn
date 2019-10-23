const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");


module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer :{
        contentBase: './dist',
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                title: 'helo'
            }
        ),
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    mode: 'development'

}
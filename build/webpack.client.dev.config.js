const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader',
            query: {
                name: '[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"]
        }),
        new HtmlWebpackPlugin({
            chunks: [
                'vendor', 'app',
            ],
            filename: 'main.html',
            template: 'src/index.template.html',
            inject: true,
        })
    ]
}

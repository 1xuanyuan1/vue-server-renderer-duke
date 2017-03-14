const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: '#source-map',
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

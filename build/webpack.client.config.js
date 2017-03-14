const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const vueConfig = require('./vue-loader.config')
const devConfig = require('./webpack.client.dev.config')
const prodConfig = require('./webpack.client.prod.config')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const utils = require('./utils')
var isProduction = process.env.NODE_ENV === 'production'
var config = merge(base, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: !isProduction,
      extract: false
    })
  }
})

if (process.env.NODE_ENV === 'production') {
    config = merge(config, prodConfig)
} else {
    config = merge(config, devConfig)
}
module.exports = config

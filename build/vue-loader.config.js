// const autoprefixer = require('autoprefixer') // 自动加前缀
// const px2rem = require('postcss-px2rem') // px to rem
// const browserslist = require('browserslist')
// const precss = require('precss') // 一种css预处理器
//
// // const utils = require('./utils')
// //
// // var options = {
// //     sourceMap: true
// // }
// // if (process.env.NODE_ENV === 'production') {
// //     options = {
// //         sourceMap: false,
// //         extract: true,
// //     }
// // }
//
// module.exports = {
//   preserveWhitespace: false,
//   // loaders: utils.cssLoaders(options)
//   postcss: [
//     autoprefixer({browsers: browserslist('last 2 version, > 0.1%')}),
//     px2rem({remUnit: 34.5}),
//     precss()
//   ]
// }
var utils = require('./utils')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: !isProduction,
    extract: false
  })
}

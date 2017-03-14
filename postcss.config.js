const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem') // px to rem
const browserslist = require('browserslist')
const precss = require('precss') // 一种css预处理器

module.exports = {
    plugins: [
      autoprefixer({browsers: browserslist('last 2 version, > 0.1%')}),
      px2rem({remUnit: 16}), // 若以iphone6  width:750px 为模板  移动端应该为 75  web端默认为16px
      precss()
    ]
}

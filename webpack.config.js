var path = require('path');

module.exports = {
  context:path.resolve('js'),
  entry:["./util","./app"],
  output:{
    path:path.resolve('build/js/'),
    publicPath:'/public/assets/js/',
    filename:'bundle.js'
  },
  watch:true,
  devServer:{
    contentBase:'public'
  },
  module:{
    preloaders:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders:[
      {
        test:/\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve:{
    extensions:['','.js','.es6']
  }
}

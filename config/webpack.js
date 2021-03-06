/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 */

/*
 * Webpack configuration. For more information visit
 * http://webpack.github.io/docs/configuration
 */

'use strict';

var webpack = require('webpack');

module.exports = function (release) {
  return {
    cache: !release,
    debug: !release,
    devtool: false,
    entry: {
      'reactAutoComplete' : './src/index.js',
      'reactAutoComplete.min' : './src/index.js'
    },
    output: {
      path: './lib/',
      filename: '[name].js',
      publicPatch: './lib/',
      // export itself to UMD Module
      libraryTarget: "umd",
      // name of the global var: "ReactAutocomplete"
      library: "ReactAutocomplete"
    },
    externals: {
      "react": {
        root : 'React',
        commonjs : 'react',
        commonjs2 : 'react',
        amd : 'react'
      },
      "react-dom": {
        root: 'ReactDOM',
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom'
      }
    },

    stats: {
      colors: true,
      reasons: !release
    },

    plugins: release ? [
      new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        compress: { warnings: false }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ] : [],

    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    }
  };
};

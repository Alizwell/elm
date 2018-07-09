var  config = require('../config');

if( !process.env.NODE_ENV ) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)

var  path = require('path')
var  express = require('express')
var  webpack = require('webpack')
var  opn = require('opn')
var  proxyMiddleware = require('http-proxy-middleware')	
var  webpackConfig = require('./webpack.dev.conf')

var  post = process.env.PORT ||  config.dev.root

var  server = express()

var  compiler = webpack(webpackConfig)
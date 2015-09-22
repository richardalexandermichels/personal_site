"use strict";
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');

module.exports = function (app) {

    var root = app.getValue('projectRoot');

    var npmPath = path.join(root, './node_modules');
    var publicPath = path.join(root, './public');
    var browserPath = path.join(root, './client');
    var assetPath = path.join(root, './client/asset/');
    var bootswatch = path.join(root, './node_modules/bootswatch-sass/');
    app.use(favicon(app.getValue('faviconPath')));
    app.use(express.static(npmPath));
    app.use(express.static(publicPath));
    app.use(express.static(browserPath));
    app.use('/asset', express.static(assetPath));
    app.use('/', express.static(bootswatch));

};

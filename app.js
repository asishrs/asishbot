'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(allowCrossDomain)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index', {
        appToken: process.env.SMOOCH_APP_TOKEN
    });
});

module.exports = app;

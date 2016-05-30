'use strict';

const express = require('express');
// const helmet = require('helmet')
const frameguard = require('frameguard')
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
// app.use(helmet(frameguard({
//   action: 'allow-from',
//   domain: '*'
// })));

app.use(frameguard({
  action: 'allow-from',
  domain: 'ALLOWALL'
}))

app.get('/', function(req, res) {
    res.render('index', {
        appToken: process.env.SMOOCH_APP_TOKEN
    });
});

module.exports = app;

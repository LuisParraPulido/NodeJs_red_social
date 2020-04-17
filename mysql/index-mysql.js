const express = require('express');
const bodyParser = require('body-parser');

const { config } = require('../config');
const router = require('./network');

const app = express();

app.use(bodyParser.json());

//Rutas
app.use('/', router)

app.listen(config.mysqlService.port, () => {
  console.log('Service of mysql listenig port: ', config.mysqlService.port)
})
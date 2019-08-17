'use strict';

const express = require('express');
const ecstatic = require('ecstatic');
const http = require('http');

const app = express();

app.use(
  ecstatic({
    root: `${__dirname}/public`,
    showdir: true,
  }),
);

http.createServer(app).listen(3030);

console.log('Listening on :3030');

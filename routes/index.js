const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const express = require('express');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;

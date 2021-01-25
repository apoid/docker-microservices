'use strict';

const PORT = 5002;
const HOST = process.env.HOST_IP;

const express = require('express');
const productsRoutes = require('./routes/products');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(PORT, HOST);

// DEBUG
console.log(`Running on http://${HOST}:${PORT}`);

// register products routes
app.use('/products', productsRoutes.router);

app.get('/', (req, res) => {
  console.log("GET /");
  res.send('Welcome to products service.');
})


// Error Handling
function logErrors (err, req, res, next) {
  console.error(err.stack);
  console.error(err.message);
  next(err);
}

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

function errorHandler (err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
const express = require('express');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const productsRepo = require('../repositories/productsRepository');

/* *****************************
 * TEST routes
 *******************************/
router.get('/ping', (req, res) => {
    console.log("GET /products/ping");
    res.send('Ping from products route live update');
  });

router.get('/', (req, res) => {
  console.log("GET /products/");
  productsRepo.getProductsFromDatabase()
  .then(products => {
    res.json(products)})
  .catch(err => res.status(400).json(err.message));
})

module.exports = {
    router,
};
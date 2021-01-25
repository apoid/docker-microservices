const express = require('express');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const usersRepo = require('../repositories/usersRepository');

/* *****************************
 * TEST routes
 *******************************/
router.get('/ping', (req, res) => {
    console.log("GET /login/ping");
    res.send('Ping from login route');
  });

router.get('/', (req, res) => {
  console.log("GET /login");
  usersRepo.getUsersFromDatabase()
  .then(users => {
    res.json(users)})
  .catch(err => res.status(400).json(err.message));
})

module.exports = {
    router,
};
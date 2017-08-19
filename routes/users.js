const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/user')

const router = express();

router.get('/users', (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(error => res.send(error))
});

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(error => res.send(error))
});

//For possible future uses, since there just an Admin user, there is no use for it at the moment.
router.post('/users', (req, res) => {
  User.create({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    web: req.body.web,
    address: req.body.address,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password
  })
    .then(user => res.json(user))
    .catch(error => res.send(error))
});

router.put('/users/:id', (req, res) => {
  User.findOneAndUpdate({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    web: req.body.web,
    address: req.body.address,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password
  })
    .then(user => res.json(user))
    .catch(error => res.send(error))
});

module.exports = router;

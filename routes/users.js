const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/user')

const router = express();

router.get('/users', (req, res) => {
  User.find().then(user => {
    res.json(user);
  });
});

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id).then(user => {
    res.json(user);
  }).catch(error => res.send(error))
});

router.post('/users', (req, res) => {
  User.create({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    web: req.body.web,
    address: req.body.address,
    phone: req.body.phone
  }).then(user => res.json(user));
});

router.put('/users/:id', (req, res) => {
  User.findOneAndUpdate({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    web: req.body.web,
    address: req.body.address,
    phone: req.body.phone
  }).then(user => res.json(user))
})

module.exports = router;

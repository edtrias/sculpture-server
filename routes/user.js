const express = require('express');
const mongoose = require('mongoose');

const User = require('/models/user')

const router = express();

router.get('/admin/users', (req, res) => {
  User.find().then(user => {
    res.json(user);
  });
});

router.get('/admin/user/:id', (req, res) => {
  User.findById(req.params.id).then(user => {
    res.json(user);
  });
});

module exports router;

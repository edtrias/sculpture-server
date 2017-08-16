const express = require('express');
const mongoose = require('mongoose');

const Collection = require('../models/collection');

const router = express();

router.get('/collections', (req, res) => {
  Collection.find()
    .then(collection => res.json(collection))
    .catch(error => res.json(error))
})

router.get('/collections/:id', (req, res) => {
  Collection.findById(req.params.id)
    .then(collection => res.json(collection))
    .catch(error => res.json(error))
  })

router.post('/collections', (req, res) => {
  Collection.create({
    title: req.body.title,
    description: req.body.description
  })
    .then(collection => res.json(collection))
    .catch(error => res.json(error))
})

router.put('/collections/:id', (req, res) => {
  Collection.findOneAndUpdate({
    title: req.body.title,
    description: req.body.description
  })
    .then(collection => res.json(colletion))
    .catch(error => res.json(error))
})

router.delete('/collections/:id', (req, res) => {
  Collection.findOneAndRemove()
    .then(() => res.json({message: 'Removed successfully'}))
    .catch(error => res.json(error))
})

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');

const Family = require('../models/family');

const router = express();

router.get('/families', (req, res) => {
  Family.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.get('/families/:id', (req, res) => {
  Family.findById(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.json(error))
  })

router.post('/families', (req, res) => {
  Family.create({
    title: req.body.title,
    description: req.body.description
  })
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.put('/families/:id', (req, res) => {
  Family.findOneAndUpdate({
    title: req.body.title,
    description: req.body.description
  })
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.delete('/families/:id', (req, res) => {
  Family.findOneAndRemove()
    .then(() => res.json({message: 'Removed successfully'}))
    .catch(error => res.json(error))
})

module.exports = router;

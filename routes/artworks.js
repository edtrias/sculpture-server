const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const Artwork = require('../models/artwork');

const router = express();

router.get('/artworks', (req, res) => {
  Artwork.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.get('/artworks/:id', (req, res) => {
  Artwork.findById(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.post('/artworks', (req, res) => {
  Artwork.create({
    name: req.body.name,
    family: req.body.family,
    material: req.body.material,
    //image: req.file...
    specs: req.body.specs
  })
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.put('/artworks/:id', (req, res) => {
  Artwork.findOneAndUpdate({
    name: req.body.name,
    family: req.body.family,
    material: req.body.material,
    //image: req.file...
    specs: req.body.specs
  })
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.delete('/artworks/:id', (req, res) => {
  Artwork.findOneAndRemove()
    .then(() => res.json({message: 'Removed successfully'}))
    .catch(error => res.json(error))
})

module.exports = router;

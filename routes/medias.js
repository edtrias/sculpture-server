const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const Media = require('../models/media');

const router = express();

router.get('/medias', (req, res) => {
  Media.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

router.get('/medias/:id', (req, res) => {
  Media.findById(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

router.post('/medias', (req, res) => {
  Media.create({
    title: req.body.title,
    source: req.body.source,
    link: req.body.link,
    //image: req.file...
  })
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.put('/medias/:id', (req, res) => {
  Media.findOneAndUpdate({
    title: req.body.title,
    source: req.body.source,
    link: req.body.link,
    //image: req.file...
  })
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.delete('/medias/:id', (req, res) => {
  Media.findOneAndRemove()
    .then(data => res.json({message: 'Removed successfully'}))
    .catch(error => res.json(error))
})

module.exports = router;

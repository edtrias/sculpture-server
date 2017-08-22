const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');

const Artwork = require('../models/artwork');

const router = express();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/artworks')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

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

  let upload = multer({storage: storage}).single('image');

  upload(req, res,(err) => {

    Artwork.create({
      name: req.body.name,
      // family: req.body.family,
      material: req.body.material,
      specs: req.body.specs,
      image: req.file,
      // fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      encoding: req.file.encoding,
      mimetype: req.file.mimetype,
      destination:req.file.destination,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
    })
      .then(data => res.json({response: data , message: 'Artwork has been created.'}))
      .catch(error => res.json(error))
  })
});

router.put('/artworks/:id', (req, res) => {
  Artwork.findOneAndUpdate({
    name: req.body.name,
    family: req.body.family,
    material: req.body.material,
    specs: req.body.specs
  })
    .then(() => res.json({message: 'Artwork data updated successfully.'}))
    .catch(error => res.json(error));
});

router.put('/artworks/:id/img'), (req, res) => {

  var upload = multer({storage:storage}).single('image')
  upload(req,res, (err) => {
    Artwork.findOneAndUpdate({
      image: req.file,
      // fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      encoding: req.file.encoding,
      mimetype: req.file.mimetype,
      destination:req.file.destination,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
    })
     .then(() => res.json({message: 'Artwork image has been updated.'}))
      .catch(error => res.json(error))
  });
};

router.delete('/artworks/:id', (req, res) => {
  Artwork.findOneAndRemove()
    .then(() => res.json({message: 'Artwork Removed successfully.'}))
    .catch(error => res.json(error))
})

module.exports = router;

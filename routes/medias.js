const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');

const Media = require('../models/media');

const router = express();

let storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'public/uploads/medias')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

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

  let upload = multer({storage: storage}).single('image');

  upload(req, res, (err) => {
    Media.create({
      title: req.body.title,
      source: req.body.source,
      link: req.body.link,
      image: req.file,
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      encoding: req.file.encoding,
      mimetype: req.file.mimetype,
      destination:req.file.destination,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
    })
      .then(data => res.json({response: data, message: 'Media has been created'}))
      .catch(error => res.json(error))
  })
});

router.put('/medias/:id', (req, res) => {
  Media.findOneAndUpdate({
    title: req.body.title,
    source: req.body.source,
    link: req.body.link,
  })
    .then(() => res.json({message: 'Media data has been updated'}))
    .catch(error => res.json(error))
})

router.put('/medias/:id/img', (req, res) => {
  Media.findOneAndUpdate({
    image: req.file,
    fieldname: req.file.fieldname,
    originalname: req.file.originalname,
    encoding: req.file.encoding,
    mimetype: req.file.mimetype,
    destination:req.file.destination,
    filename: req.file.filename,
    path: req.file.path,
    size: req.file.size,
  })
    .then(() => res.json({message: 'Media image has been upadated'}))
    .catch(error => res.json(error))
})

router.delete('/medias/:id', (req, res) => {
  Media.findOneAndRemove()
    .then(data => res.json({message: 'Media removed successfully'}))
    .catch(error => res.json(error))
})

module.exports = router;

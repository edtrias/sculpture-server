const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');

const Expo = require('../models/expo');

const router = express();



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// var upload = multer({ storage: storage });

router.get('/expos', (req, res) => {
  Expo.find()
    .then(expo => res.json(expo))
    .catch(error => res.json(error))
});

router.get('/expos/:id', (req, res) => {
  Expo.findById(req.params.id)
    .then(expo => res.json(expo))
    .catch(error => res.json(error))
});

// Yet to be verified

router.post('/expos', (req, res) => {

  //-------------- Test to see if the req works well (it works) ------------
  // console.log(req.body);
  // console.log(req.file);
  // res.status(204).end();

  var upload = multer({storage: storage}).single('image')

  upload(req, res, (err) => {
    Expo.create({
      title: req.body.title,
      place: req.body.place,
      link: req.body.link,
      modality: req.body.modality,
      city: req.body.city,
      coutry: req.body.country,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      other: req.body.other,
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
      .then(expo => res.json(expo))
      // .then(() => res.end('File is uploaded'))
      .catch(error => res.json(error))
  })
});

router.put('/expos/:id', (req, res) => {
  Expo.findOneAndUpdate({
    title: req.body.title,
    place: req.body.place,
    link: req.body.link,
    modality: req.body.modality,
    city: req.body.city,
    coutry: req.body.country,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    other: req.body.other
  }).then(expo => res.json(expo));
});

router.put('/expos/:id/img', (req, res) => {

  var upload = multer({storage: storage}).single('image')

  upload(req, res, (err) => {
    Expo.findOneAndUpdate({
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
      .then(expo => res.json(expo))
      .catch(error => res.json(error))
  })
})

router.delete('/expos/:id', (req, res) => {
  Expo.findOneAndRemove()
    .then(() => res.json({message: 'Removed successfully'}))
    .catch(error => res.json(error))
});

module.exports = router;

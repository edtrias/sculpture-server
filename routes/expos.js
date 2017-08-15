const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const expo = require('../models/expo');

const router = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/img')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

router.get('/expos', (req, res) => {
  Expos.find().then(expos => res.json(expos));
});

router.get('/expos/:id', (req, res) => {
  Expos.findById(req.params.id).then(expos => res.json(expos));
});

// Yet to be verified

router.post('/expos', upload.single('file'), (req, res) => {
  Expos.create({
    title: req.body.title,
    place: req.body.place,
    link: req.body.link,
    modality: req.body.modality,
    city: req.body.city,
    coutry: req.body.country,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    picture: req.file,
    other: req.body.other
  }).then(expos => res.json(expos));
});

router.put('/expos/:id', upload.single('file'), (req, res) => {
  Expos.findOneAndUpdate({
    title: req.body.title,
    place: req.body.place,
    link: req.body.link,
    modality: req.body.modality,
    city: req.body.city,
    coutry: req.body.country,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    picture: req.file,
    other: req.body.other
  }).then(expos => res.json(expos));
});

router.delete('/expos/delete', (req, res) => {
  Expos.finOneAndRemove().then(expos => res.json(expos));
});

module.exports = router;

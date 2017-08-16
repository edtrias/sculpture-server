const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const Expo = require('../models/expo');

const router = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

var upload = multer({ storage: storage });

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

router.post('/expos', upload.single('image'), (req, res) => {

  //-------------- Test to see if the req works well (it works) ------------
  // console.log(req.body);
  // console.log(req.file);
  // res.status(204).end();

  //------------Test via Instance (well written but doesn't work)-------------
  const expo = new Expo({
    title: req.body.title,
    place: req.body.place,
    link: req.body.link,
    modality: req.body.modality,
    city: req.body.city,
    coutry: req.body.country,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    image: req.file,
    other: req.body.other
   });

   expo.save((err) => {
     if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'New Expo created!'
    });
  });

//------------ Test via Promises (well written but doesn't work)-------------
  // Expo.create({
  //   title: req.body.title,
  //   place: req.body.place,
  //   link: req.body.link,
  //   modality: req.body.modality,
  //   city: req.body.city,
  //   coutry: req.body.country,
  //   startDate: req.body.startDate,
  //   endDate: req.body.endDate,
  //   other: req.body.other
  // }).then(expo => res.json(expo));
});

router.put('/expos/:id', upload.single('image'), (req, res) => {
  Expo.findOneAndUpdate({
    title: req.body.title,
    place: req.body.place,
    link: req.body.link,
    modality: req.body.modality,
    city: req.body.city,
    coutry: req.body.country,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    image: req.file,
    other: req.body.other
  }).then(expo => res.json(expo));
});

router.delete('/expos/:id', (req, res) => {
  Expo.findOneAndRemove()
    .then(() => res.json({message: 'Removed successfully'}))
    .catch(error => res.json(error))
});

module.exports = router;

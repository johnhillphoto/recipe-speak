'use strict';
var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');


router.get('/', function(req,res, next){
  Recipe.find({})
  .then(function(recipes){
    res.status(200).json(recipes);
  });
});

router.get('/:id', function(req,res, next){
  Recipe.findById(req.params.id)
  .then(function(recipe){
    res.status(200).json(recipe);
  });
});

router.post('/', function(req,res, next){
  Recipe.create(req.body)
  .then(function(recipe){
    res.status(200).json(recipe);
  });
});

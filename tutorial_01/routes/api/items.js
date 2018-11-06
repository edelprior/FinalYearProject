const express = require('express');
const router = express.Router();


// Item Model
const Item = require('../../models/Item');

// @Route GET api/Item
// @description gets all the items from the // db
// @access Public as there is no authentication
// represents this folder
router.get('/', (req, res) => {
  Item.find()
    .sort({
      date: -1
    }) //descending date
    .then(items => res.json(items))
});



// @Route POST api/Item
// @description creates a new item
// @access Public as there is no authentication
// represents this folder
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});


// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({
      success: true
    })))
    .catch(err => res.status(404).json({
      success: false
    }));
});
module.exports = router;

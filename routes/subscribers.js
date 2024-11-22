const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');


//Get all 
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message});
  }

})
//Get one
router.get('/:id', (req, res) => {
  res.send(req.params.id);
});
//Create
router.post('/', (req, res) => {

});
//Update
router.patch('/:id', (req, res) => {

})
//Delete
router.delete('/:id', (req, res) =>{

});



module.exports = router;
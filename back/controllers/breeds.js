const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Breeds = require('../models/breeds');
const connectDB = require('../database');

connectDB();

//retrieve all breeds
router.get('/', async (req, res) => {
    try {
        const breeds = await Breeds.find({});
        res.json(breeds)
    } catch (err) {
        console.log('Error fetching breeds: ', err);
        res.status(500).json({ error: 'Error fetching breeds.'});
    }
})

//retrieve breed by param
router.get('/:id', async (req, res) => {
    try {
        const breedId = req.params.id;
        console.log(breedId)
        const breed = await Breeds.findById(breedId);
        if(breed){
            res.json(breed);
        } else {
            res.status(404).json({ error: 'Breed not found.'});
        }
    } catch (err) {
        console.log('Breed not found: ', err);
        res.status(500).json({error: 'Breed not found.'});
    }
});


//add new breed
router.post('/', async (req, res) => {
    try {
        const new_breed = new Breeds(req.body);
        await new_breed.save();
        res.status(201).json({ message: 'Breed added.'});
    } catch (err) {
        if(err.name === 'ValidationError'){
            res.status(400).json({ error: err.message });
        } else{
            res.status(500).json({ error: 'Could not add new breed.'});
        }
    }
});

//edit existing breed 
router.patch('/:id', async (req, res) => {
    try {
        const breedId = req.params.id;
        const updated_data = req.body;

        const updated_breed = await Breeds.findByIdAndUpdate( breedId, updated_data, { new: true });

        if(updated_breed) {
            res.json(updated_breed);
        } else {
            res.status(404).json({ error: 'Breed not found. '});
        }
    } catch (err) {
        console.error('Error updating breed: ', err);
        res.status(500).json({ error: 'Could not update breed.' });
    }
});

//delete breed
router.delete('/:breed', async (req, res) => {
    try {
        const breed = req.params.breed;
        const result = await Breeds.deleteOne({ breed: { $regex: new RegExp('^' + breed, 'i') } })
        if(result.deletedCount > 0){
            res.status(200).send();
        } else {
            res.status(404).json({ error: 'Breed not found. '});
        }
    } catch (err) {
        console.log('Could not delete breed: ', err);
        res.status(500).json({ error: 'Could not delete breed. '});
    }
});

module.exports = router;
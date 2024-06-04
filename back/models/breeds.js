const mongoose = require('mongoose');

const { Schema } = mongoose;

const breedSchema = new Schema({
    breed: {
        type: String, 
        required: [true],
        unique: [true]
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    
    icon: {
        type: String,
    },

    playfulness: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    docility: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    grooming: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    independence: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    intelligence: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    activity: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    attention: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    friendliness: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
},{ collection: 'breeds' });

module.exports = mongoose.model('Breeds', breedSchema)
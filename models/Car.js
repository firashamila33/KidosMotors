const mongoose = require('mongoose');
const {Schema} = mongoose;

const carSchema = new Schema({
    title: String,
    price: Number,
    make: String,
    model: String,
    body: String,
    fuel: String,
    engine: String,
    transmission: String,
    color: String,
    door: {type: Number, default: 4},
    oldCar: {type: Boolean, default: false},
    mileage: Number,
    warranty: Number,
    description: String,
    features: [String]
});

mongoose.model('cars', carSchema);
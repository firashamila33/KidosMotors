const mongoose = require('mongoose');
const {Schema} = mongoose;

const carSchema = new Schema({
    title: String,
    price: Number,
    make: String,
    model: String,
    carBody: String,
    fuel: String,
    color: String,
    door: {type: Number, default: 4},
    oldCar: {type: Boolean, default: false},
    mileage: Number,
    warranty: Number,
    description: String,
<<<<<<< HEAD
    pathImages: [String],
    features: [String],
    engine: {
        numberOfCylindre: Number,
        displacement: String,
        engineLayout: String,
        horesPower: Number,
        rpm: String,
        torque: String,
        compressionRatio: String
    },
    performance: {
        topSpeed: Number,
        acceleration: Number
    },
    transmission: String,
    consumption: {
        city: Number,
        highway: Number
    },
    body: {
        length: Number,
        width: Number,
        height: Number,
        wheelBase: Number,
        maximumPayload: Number
    },
=======
    features: [String],
    state:String
>>>>>>> 08f333d622087bccc035cb83e5aed226daa69edc
});

mongoose.model('cars', carSchema);
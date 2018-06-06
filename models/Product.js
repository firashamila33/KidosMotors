const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title: String,
    price: {type: Number, default: 0},
    oldPrice: Number,
    briefDescription: String,
    brand: String,
    code: String,
    manufactor: String,
    color: String,
    availability: {type: Boolean, default: true},
    quantity: {type: Number, default: 1},
    description: String,
    photosPath: [String],
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
    _category: { type: Schema.Types.ObjectId, ref: 'Category' }
});

mongoose.model('products', productSchema);

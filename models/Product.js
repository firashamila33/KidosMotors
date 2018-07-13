const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title: String,
    price: {type: Number, default: 0},
    oldPrice: Number,
    rating: Number,
    briefDescription: String,
    brand: String,
    code: String,
    manufactor: String,
    color: String,
    availability: {type: Boolean, default: true},
    quantity: {type: Number, default: 1},
    description: String,
    photosPath: [String],
    productCategory: { type: Schema.Types.ObjectId, ref: 'Category' }
});

mongoose.model('Product', productSchema);

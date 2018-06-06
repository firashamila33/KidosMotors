const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    name: String
});

mongoose.model('categorys', categorySchema);
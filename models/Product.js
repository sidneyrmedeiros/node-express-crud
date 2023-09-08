const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        get: v => (v / 100).toFixed(2),
        set: v => v * 100
    },
    createdBy: {
        type: String,
        required: true
    },
    updatedBy: {
        type: String,
        required: true
    }
},
    {
        toJSON: { getters: true },
        timestamps: true
    });

module.exports = Product = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, require: true},
    supplier: {type: String, require: true},
    imageUrl: {type: String, require: true},
    description: {type: String, require: true},
    product_location: {type: String, require: true},
}, );

module.export = mongoose.model("Product", ProductSchema)
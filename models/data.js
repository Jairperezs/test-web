'use strict'

// Get elements
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Model Product
const ProductSchema = Schema({
    name: String,
    email: String,
    phone: Number,
    job: String
})

module.exports = mongoose.model('data', ProductSchema)
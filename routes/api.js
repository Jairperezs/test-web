'use strict'

// Get elements
const express = require('express')
const dataCtrl = require('../controllers/data')
const api = express.Router()

// Routes /api/product
api.get('/data', dataCtrl.getAllData)
api.get('/data/:dataId', dataCtrl.getData)
api.post('/data', dataCtrl.saveData)
api.put('/data', dataCtrl.updateData)
api.delete('/data', dataCtrl.deleteData)

module.exports = api
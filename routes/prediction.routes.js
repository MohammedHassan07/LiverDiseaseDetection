const express = require('express')
const dlModel = require('../controller/dl.controller')

const route = express.Router()

route.get('/')

route.post('/predict', dlModel)

module.exports = route
const express = require('express')
const cors = require('cors')
// const {errors}  = require('celebrate')
const bodyParser = require('body-parser')

const api = express()
const PORT = process.env.PORT || 3001

api.use(cors())
api.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
api.use(express.urlencoded({ extended: true }))
api.use(express.json({ extended: true }))

api.get('/', (req, res) => res.send('Hello BackEnd'))

api.use('/api/v1', require('../routers'))
// api.use(errors())

module.exports = { api, PORT }

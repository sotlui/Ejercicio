const express = require('express')

const router = express.Router()

const { PlantacionController } = require('../controllers')

router.post('/plantacion', PlantacionController.insert)

router.get('/plantacion', PlantacionController.findAll)

module.exports = router

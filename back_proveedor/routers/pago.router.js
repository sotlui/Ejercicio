const express = require('express')

const router = express.Router()

const { pago } = require('../controllers')

// router.post('/pago', PlantacionController.insert)

router.get('/pago', pago.findAll)
router.get('/pago/:ruc', pago.countData)

module.exports = router

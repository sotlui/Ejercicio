const express = require('express')

const router = express.Router()

const { ResponsableController } = require('../controllers')

router.post('/responsable', ResponsableController.insert)

router.get('/responsable', ResponsableController.findAll)

// router.get('/responsable/:id', ResponsableController)

// router.patch('/responsable/:id', ResponsableController)

// router.delete('/responsable/:id', ResponsableController)

module.exports = router

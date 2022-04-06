const express = require('express')

const router = express.Router()

router.use(require('./ResponsableRouter'))
router.use(require('./PlantacionRouter'))
router.use(require('./pago.router'))

module.exports = router

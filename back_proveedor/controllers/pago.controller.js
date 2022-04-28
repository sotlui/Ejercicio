const { pagos } = require('../services')

module.exports = {
  /*
  insert: async (req, res) => {
    // console.log('BODY', req.body)
    try {
      const plantacion = await PlantacionService.insert(req.body)
      res.status(200).json(plantacion)
    } catch (error) {
      res.status(400).json(error)
    }
  },
*/
  findAll: async (req, res) => {
    console.log('ParamsFIND: ', req.query)
    try {
      const pago = await pagos.findAll(req, res)
      res.status(200).json({ pago })
    } catch (error) {
      res.status(400).json(error)
    }
  },

  countData: async (req, res) => {
    console.log('ParamsCOUNT: ', req.query)
    try {
      const totalData = await pagos.countData(req, res)
      res.status(200).json({ totalData })
    } catch (error) {
      res.status(400).json(error)
    }
  }

}

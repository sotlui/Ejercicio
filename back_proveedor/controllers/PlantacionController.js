const { PlantacionService } = require('../services')

module.exports = {
  insert: async (req, res) => {
    // console.log('BODY', req.body)
    try {
      const plantacion = await PlantacionService.insert(req.body)
      res.status(200).json(plantacion)
    } catch (error) {
      res.status(400).json(error)
    }
  },

  findAll: async (req, res) => {
    try {
      const plantacion = await PlantacionService.findAll()
      res.status(200).json({ plantacion })
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

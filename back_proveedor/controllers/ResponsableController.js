const { ResponsableService } = require('../services')

module.exports = {
  insert: async (req, res) => {
    // const { id } = req.body
    try {
      const resExist = await ResponsableService.findById(req.body)
      if (resExist) res.status(400).json({ message: 'Periodo ya existe' })
      const resp = await ResponsableService.insert(req.body)
      res.status(201).json(resp)
    } catch (error) {
      res.status(400).json(error)
    }
  },

  findAll: async (req, res) => {
    try {
      const periodo = await ResponsableService.findAll()
      res.status(200).json({ periodo })
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

const connection = require('../database/connection')

module.exports = {

  async create(req, res) {

      const { email } = req.body;

      const ong = await connection('ongs').where('email', email).select('*').first();

      if (!ong) {
        return res.status(400).json({ error: 'No ONG found with this EMAIL' });

      }
      return res.json(ong);

  }

}
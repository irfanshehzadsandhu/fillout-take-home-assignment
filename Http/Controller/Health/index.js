class HealthController {
  constructor() {

  }

  healthIsGood = (req, res) => {
    res.send('Server is running');
  }
}
module.exports = HealthController
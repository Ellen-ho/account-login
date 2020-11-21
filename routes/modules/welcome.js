const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const firstName = req.query.firstName
  return res.render('welcome', { firstName })
})

module.exports = router

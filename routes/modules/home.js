const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // 目前還沒做儲存登入狀態，進來一律導去 Login
  return res.redirect('/login')
})

module.exports = router

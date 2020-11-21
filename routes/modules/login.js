const express = require('express')
const router = express.Router()

const AccountLogin = require('../../models/accountLogin')

router.get('/', (req, res) => {
  return res.render('login', { errorMsg: null })
})

router.post('/', (req, res) => {
  const userAuth = req.body
  const email = userAuth.email.trim()
  const password = userAuth.password.trim()

  return AccountLogin.findOne(
    {
      $and:[
        { email: email },
        { password: password }
      ]
    })
    .lean()
    .then(result => {
      if (result === null) {
        res.render('login', { errorMsg: 'Username 或 Password 錯誤!' })
        return;
      }
      console.log(`result: ${JSON.stringify(result)}`);
      res.redirect('/welcome', { firstName: result.firstName })
    })
    .catch(error => console.log(`login error: ${error}`))
})

module.exports = router

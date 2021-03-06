const express = require('express')
const router = express.Router()
const Aliran = require('../controllers/Aliran')
const auth = require('../auth/auth')

router.get('/all',auth.isLogin,Aliran.findAll)
router.get('/:id',auth.isLogin,Aliran.findOne)
router.post('/add',auth.isLogin,auth.isAdmin,Aliran.create)
router.put('/:id',auth.isLogin,auth.isAdmin,Aliran.update)
router.delete('/:id',auth.isLogin,auth.isAdmin,Aliran.remove)

module.exports = router
const express = require('express')
const userController = require('../controller/user.controller')
const routes = express.Router()

routes.get('/', userController.userList)

module.exports = routes
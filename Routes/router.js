const express = require('express')

const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const projectController = require('../Controllers/projectController')
const multerMiddleware = require('../Middlewares/multerMiddleware')

const router= express.Router()

router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addProject',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.addProjectAPI)

router.get('/api/getAllUserProject',jwtMiddleware,projectController.getAllUserProject)

router.get('/api/getAUserProject',jwtMiddleware,projectController.getUserProject)

router.get('/api/getHomeProject',projectController.getHomeProject)

router.put('/api/editProject/:projectId',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.editProjectAPI)

router.delete('/api/deleteProject/:projectId',jwtMiddleware,projectController.deleteProjectAPI)

module.exports=router
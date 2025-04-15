const express = require('express');
const router = express.Router();
 
const userController = require('../controller/userController')
 
router.get("/user/", (req, res) => userController.findAll(req,res))
router.post("/user/", (req, res) => userController.create(req, res))
router.delete("/user/:id", (req, res) => userController.delete(req, res))
router.put("/user/:id", (req, res) => userController.update(req, res))
 
module.exports = router
 
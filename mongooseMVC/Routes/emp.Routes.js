const express = require('express');
const router = express.Router();
const { greet,addEmp,updateEmp,deleteEmp,showEmp,showByID} = require('../Controllers/emp.Controllers.js');

router.get('/', greet);
router.post('/addEmp', addEmp);
router.put('/updateEmp/:id', updateEmp);
router.delete('/deleteEmp/:id', deleteEmp);
router.get('/showEmp', showEmp);
router.get('/showByID/:id', showByID);

module.exports = {router};
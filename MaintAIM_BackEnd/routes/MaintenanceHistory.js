const express = require('express')
const router = express.Router()
const { MaintenanceHistory } = require('../models')
const {validateToken} = require('../middlewares/AuthMiddleware')

router.get('/',  async (req, res) => {
    const listOfMaintenanceHistory = await MaintenanceHistory.findAll();
    res.json(listOfMaintenanceHistory);
});

router.post('/',  async (req, res) => {
    const maintenancehistory = req.body;
    await MaintenanceHistory.create(maintenancehistory);
    res.json(maintenancehistory);
})


module.exports = router
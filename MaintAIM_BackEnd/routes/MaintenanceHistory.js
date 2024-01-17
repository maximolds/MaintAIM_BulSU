const express = require('express')
const router = express.Router()
const { MaintenanceHistory } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.get('/', async (req, res) => {
    const listOfMaintenanceHistory = await MaintenanceHistory.findAll();
    res.json(listOfMaintenanceHistory);
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const listOfMaintenanceHistory = await MaintenanceHistory.findByPk(id);
    res.json(listOfMaintenanceHistory);
});

router.post('/', validateToken, async (req, res) => {
    const maintenancehistory = req.body;
    const username = req.user.username;
    maintenancehistory.username = username;
    await MaintenanceHistory.create(maintenancehistory);
    res.json(maintenancehistory);
})


module.exports = router
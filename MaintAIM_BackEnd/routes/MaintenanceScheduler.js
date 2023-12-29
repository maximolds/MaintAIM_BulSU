const express = require('express')
const router = express.Router()
const { MaintenanceScheduler } = require('../models')

router.get('/', async (req, res) => {
    const listOfMaintenanceScheduler = await MaintenanceScheduler.findAll();
    res.json(listOfMaintenanceScheduler);
});

router.post('/', async (req, res) => {
    const maintenancescheduler = req.body;
    await MaintenanceScheduler.create(maintenancescheduler);
    res.json(maintenancescheduler);
});

router.delete('/', async (req, res) => {
    const maintenancescheduler = req.body;
    await MaintenanceScheduler.delete(maintenancescheduler);
    res.json(maintenancescheduler);
});

router.put('/', async (req, res) => {
    const { body: { maintenancescheduler } } = req;
    await MaintenanceScheduler.update(maintenancescheduler);
    res.json(maintenancescheduler);
});


module.exports = router
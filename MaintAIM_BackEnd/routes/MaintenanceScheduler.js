const express = require('express')
const router = express.Router()
const { MaintenanceScheduler } = require('../models')

router.get('/', async (req, res) => {
    const listOfMaintenanceScheduler = await MaintenanceScheduler.findAll();
    res.json(listOfMaintenanceScheduler);
});

router.post('/insert', async (req, res) => {
    const maintenancescheduler = req.body;
    await MaintenanceScheduler.create(maintenancescheduler);
    res.json(maintenancescheduler);
});

router.delete('/delete', async (req, res) => {
    const maintenancescheduler = req.body;
    await MaintenanceScheduler.delete(maintenancescheduler);
    res.json(maintenancescheduler);
});

router.put('/update', async (req, res) => {
    const { body: { maintenancescheduler } } = req;
    const id = req.params.id;

    await MaintenanceScheduler.update(maintenancescheduler,
        { where: { id: id } });
    res.json(maintenancescheduler);
});


module.exports = router
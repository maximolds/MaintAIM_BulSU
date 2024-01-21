const express = require('express')
const router = express.Router()
const { UHCheckList } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.get('/', async (req, res) => {
    const listOfUHCheckList = await UHCheckList.findAll();
    res.json(listOfUHCheckList);
});


router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const listOfUHCheckList = await UHCheckList.findByPk(id);
    res.json(listOfUHCheckList);
});

router.post('/',  async (req, res) => {
    const uhchecklist = req.body;
    await UHCheckList.create(uhchecklist);
    res.json(uhchecklist);
})

router.put("/update/byId/:id", async (req, res) => {
    const { id } = req.params;
    const listOfUHCheckList = await UHCheckList.update(req.body, { where: { id: id } })
    res.json(listOfUHCheckList)

});




module.exports = router
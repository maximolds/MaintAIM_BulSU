const express = require('express')
const router = express.Router()
const { DailyCheckList } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.get('/', async (req, res) => {
    const listOfDailyCheckList = await DailyCheckList.findAll();
    res.json(listOfDailyCheckList);
});


router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const listOfDailyCheckList = await DailyCheckList.findByPk(id);
    res.json(listOfDailyCheckList);
});

router.post('/', validateToken, async (req, res) => {
    const dailychecklist = req.body;
    const username = req.user.username;
    dailychecklist.username = username;
    await DailyCheckList.create(dailychecklist);
    res.json(dailychecklist);
})

router.put("/update/byId/:id", async (req, res) => {
    const { id } = req.params;
    const listOfDailyCheckList = await DailyCheckList.update(req.body, { where: { id: id } })
    res.json(listOfDailyCheckList)

});

router.delete("/:dailyId", async (req, res) => {
    const dailyId = req.params.dailyId;
    await DailyCheckList.destroy({
      where: {
        id: dailyId,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });



module.exports = router
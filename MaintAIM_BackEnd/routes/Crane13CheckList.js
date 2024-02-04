const express = require('express')
const router = express.Router()
const { Crane13CheckList } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.get('/', async (req, res) => {
    const listOfCrane13CheckList = await Crane13CheckList.findAll();
    res.json(listOfCrane13CheckList);
});


router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const listOfCrane13CheckList = await Crane13CheckList.findByPk(id);
    res.json(listOfCrane13CheckList);
});

router.post('/',  async (req, res) => {
    const crane13checklist = req.body;
    await Crane13CheckList.create(crane13checklist);
    res.json(crane13checklist);
})

router.put("/update/byId/:id", async (req, res) => {
    const { id } = req.params;
    const listOfCrane13CheckList = await Crane13CheckList.update(req.body, { where: { id: id } })
    res.json(listOfCrane13CheckList)

});

router.delete("/:crane13Id", async (req, res) => {
    const crane13Id = req.params.crane13Id;
    await Crane13CheckList.destroy({
      where: {
        id: crane13Id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });




module.exports = router
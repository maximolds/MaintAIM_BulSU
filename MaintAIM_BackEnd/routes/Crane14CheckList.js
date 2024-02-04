const express = require('express')
const router = express.Router()
const { Crane14CheckList } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.get('/', async (req, res) => {
    const listOfCrane14CheckList = await Crane14CheckList.findAll();
    res.json(listOfCrane14CheckList);
});


router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const listOfCrane14CheckList = await Crane14CheckList.findByPk(id);
    res.json(listOfCrane14CheckList);
});

router.post('/',  async (req, res) => {
    const crane14checklist = req.body;
    await Crane14CheckList.create(crane14checklist);
    res.json(crane14checklist);
})

router.put("/update/byId/:id", async (req, res) => {
    const { id } = req.params;
    const listOfCrane14CheckList = await Crane14CheckList.update(req.body, { where: { id: id } })
    res.json(listOfCrane14CheckList)

});

router.delete("/:crane14Id", async (req, res) => {
    const crane14Id = req.params.crane14Id;
    await Crane14CheckList.destroy({
      where: {
        id: crane14Id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });




module.exports = router
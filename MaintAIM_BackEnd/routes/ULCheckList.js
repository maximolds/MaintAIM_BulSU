const express = require('express')
const router = express.Router()
const { ULCheckList } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.get('/', async (req, res) => {
    const listOfULCheckList = await ULCheckList.findAll();
    res.json(listOfULCheckList);
});


router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const listOfULCheckList = await ULCheckList.findByPk(id);
    res.json(listOfULCheckList);
});

router.post('/',  async (req, res) => {
    const ulchecklist = req.body;
    await ULCheckList.create(ulchecklist);
    res.json(ulchecklist);
})

router.put("/update/byId/:id", async (req, res) => {
    const { id } = req.params;
    const listOfULCheckList = await ULCheckList.update(req.body, { where: { id: id } })
    res.json(listOfULCheckList)

});

router.delete("/:ulId", async (req, res) => {
    const ulId = req.params.ulId;
    await ULCheckList.destroy({
      where: {
        id: ulId,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });




module.exports = router
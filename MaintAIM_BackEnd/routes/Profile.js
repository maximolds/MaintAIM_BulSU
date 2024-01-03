const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const {validateToken} = require('../middlewares/AuthMiddleware')

router.get('/', validateToken, async (req, res) => {
    const username = req.user.username;
    const listOfProfile = await Users.findAll({
        where: {
            username: username
        }
    });
    res.json(listOfProfile);
});


module.exports = router
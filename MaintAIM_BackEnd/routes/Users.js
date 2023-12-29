const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')
const multer = require('multer')
const path = require('path')

const { sign } = require('jsonwebtoken')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb)=>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage,
   
})

router.post('/', upload.single('picture'), async (req, res) => {
    const { username, email, password, firstname, lastname, role, picture } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            picture: picture,
            username: username,
            email: email,
            password: hash,
            firstname: firstname,
            lastname: lastname,
            role: role
        })
        res.json("SUCCESS")
    })
})

router.get('/', async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
});







router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });

    if (!user) return res.json({ error: "User does not exist" });


    bcrypt.compare(password, user.password).then((match) => {
        if (!match) return res.json({ error: "Wrong email and password combination" });

        const accessToken = sign(
            { email: user.username, id: user.id }, "importantsecret", { expiresIn: "1h" });
        res.json(accessToken);

    });
});


module.exports = router
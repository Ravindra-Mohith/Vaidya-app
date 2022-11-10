const router = require('express').Router();
const userController = require('../controllers/userController');
const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        title: "Users",
        users
    });
})
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.put('/update/:id', userController.update);
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router;
const router = require('express').Router();
const userController = require('../controllers/user');
const auth = require('../middleware/auth');
const validator = require('../util/validator');

router.post('/register', validator.registerUser, userController.register);
router.post('/login', userController.login);
router.get('/profile', auth.isAuth, userController.profile);

module.exports = router;

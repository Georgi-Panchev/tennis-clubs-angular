const router = require('express').Router();
const clubController = require('../controllers/club');
const auth = require('../middleware/auth');
const validator = require('../util/validator');

router.get('/all', clubController.read);
router.get('/details/:clubId', auth.isAuth, clubController.readById);
router.post('/create', validator.createClub, auth.isAdmin, clubController.create);
router.put('/update/:clubId', validator.createClub, auth.isAdmin, clubController.update);
router.delete('/delete/:clubId', auth.isAdmin, clubController.delete);

module.exports = router;


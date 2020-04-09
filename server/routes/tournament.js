const router = require('express').Router();
const tournamentController = require('../controllers/tournament');
const auth = require('../middleware/auth');
const validator = require('../util/validator');

router.get('/all', tournamentController.read);
router.get('/all/:clubId', auth.isAdmin, tournamentController.readByClub);
router.get('/details/:tournamentId', auth.isAuth, tournamentController.readById);
router.post('/create/:clubId', validator.createTournament, auth.isAdmin, tournamentController.create);
router.put('/update/:tournamentId', validator.createTournament, auth.isAdmin, tournamentController.update);
router.delete('/delete/:tournamentId', auth.isAdmin, tournamentController.delete);
router.put('/attend/:tournamentId', auth.isAuth, tournamentController.attend);
router.put('/leave/:tournamentId', auth.isAuth, tournamentController.leave);

module.exports = router;


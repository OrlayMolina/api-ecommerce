const { Router } = require('express');
const { userGet } = require('../controllers/user.controller');

const router = Router();

router.get('/api/users', userGet);


module.exports = router;
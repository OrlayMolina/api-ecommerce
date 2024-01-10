const { Router } = require('express');
const { userGet, userPost, userPut, userDelete } = require('../controllers/user.controller');

const router = Router();

router.get('/api/users', userGet);
router.post('/api/users', userPost);
router.put('/api/users', userPut);
router.delete('/api/users', userDelete);


module.exports = router;
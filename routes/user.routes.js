const { Router } = require('express');
const { userGet, userPost, userPut, userDelete, loginPost } = require('../controllers/user.controller');

const router = Router();

router.get('/api/users', userGet);
router.post('/api/users', userPost);
router.post('/api/login', loginPost);
router.put('/api/users', userPut);
router.delete('/api/users', userDelete);


module.exports = router;
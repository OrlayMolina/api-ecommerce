const { Router } = require('express');
const { userGet, userPost, userPut, userDelete, loginPost } = require('../controllers/user.controller');
const chkToken = require('../middleware/auth.middleware');

const router = Router();

router.get('/api/users', chkToken, userGet);
router.post('/api/users', userPost);
router.post('/api/login', loginPost);
router.put('/api/users', chkToken, userPut);
router.delete('/api/users', userDelete);


module.exports = router;
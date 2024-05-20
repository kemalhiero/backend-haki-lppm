const {Router} = require('express');
const router = Router();

const {authMiddleware, isStrongPassword} = require('../middlewares/userMiddleware');
const { 
    register, 
    login, 
    getUserData 
} = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getUserData)

module.exports = router;
const {Router} = require('express');
const router = Router();

const {authMiddleware, isStrongPassword} = require('../middlewares/userMiddleware');
const {tambahPengajuan} = require('../controllers/pengajuanController');

router.post('/', tambahPengajuan);

module.exports = router;

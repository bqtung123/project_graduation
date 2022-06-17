const express = require('express');
const router = express.Router();
const AdminController = require('../app/controllers/AdminController');

router.get('/crawlHotel', AdminController.crawlHotel, AdminController.complete);
router.get('/admin/:key', AdminController.comment);
router.get('/admin', AdminController.show);

module.exports = router;

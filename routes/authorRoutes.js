const express = require('express');
const router = express.Router();
const controller = require('../controllers/authorControllers');

router.get('/', controller.getAll);
router.put('/:id', controller.update);

module.exports = router;
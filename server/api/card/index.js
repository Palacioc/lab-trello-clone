'use strict';

var express = require('express');
var controller = require('./card.controller');

var router = express.Router();

router.get('/', controller.getCards);
router.post('/', controller.createCard);
router.put('/:id', controller.editCard);
router.delete('/:id', controller.removeCard);

module.exports = router;
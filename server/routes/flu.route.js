const express = require('express');


const  requireAuth = require('../middleware/requireAuth');
const { createFlu, getAllFlu, deleteFlu } = require('../controllers/flu.controller');
const router = express.Router();

router.use(requireAuth)

router.post('/', createFlu);
router.get('/', getAllFlu);

router.delete('/:id', deleteFlu);



module.exports = { fluRouter: router };

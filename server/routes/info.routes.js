const express = require('express');
const { createInfo, getInfos, getInfo, deleteInfo, updateInfo } = require('../controllers/info.controller');

const  requireAuth = require('../middleware/requireAuth')
const router = express.Router();

router.use(requireAuth)

router.post('/', createInfo);
router.get('/', getInfos);
router.get('/:id', getInfo);
router.delete('/:id', deleteInfo);
router.put('/:id', updateInfo);


module.exports = { infoRouter: router };

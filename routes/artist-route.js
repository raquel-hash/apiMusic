var express = require('express');
var router = express.Router();
var artistController= require('../controller/artist-controller');


/* GET users listing. */
router.get('/get', artistController.get);
router.post('/store', artistController.store);
router.delete('/destroy/:id', artistController.destroy);
router.put('/edit/:id', artistController.update);
router.get('/:id', artistController.getById);

module.exports = router;

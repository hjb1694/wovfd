const router = require('express').Router();
const {
    homePageController
} = require('../controllers/general');

router.get('/', homePageController);

module.exports = router;
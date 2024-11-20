const express = require('express');
const auth = require('./auth/auth.routes');
const users = require('./user/user.routes');
const framework = require('./framework/framework.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/auth', auth);

router.use('/users', users);
router.use('/frameworks', framework);

module.exports = router;

const express = require('express');
const { isAuthenticated } = require('../../middlewares');
const { db } = require('../../utils/db');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await db.framework.findMany();
  res.json(data);
});

router.post('/', isAuthenticated, async (req, res) => {
  const data = await db.framework.create({ data: req.body});
  res.status(201).json(data);
});

router.patch('/:id', isAuthenticated, async (req, res) => {
  const data = await db.framework.update({ where: { id: Number(req.params.id) }, data: req.body});
  res.status(200).json(data);
});

module.exports = router;

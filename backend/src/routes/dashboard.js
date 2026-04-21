const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { Field, FieldUpdate } = require('../models');

router.use(authMiddleware);

router.get('/summary', async (req, res) => {
  try {
    const totalFields = await Field.count({
      where: { user_id: req.user.id },
    });
    
    const activeFields = await Field.count({
      where: { user_id: req.user.id, status: 'active' },
    });
    
    const recentUpdates = await FieldUpdate.findAll({
      include: [{ model: Field, where: { user_id: req.user.id } }],
      order: [['created_at', 'DESC']],
      limit: 10,
    });
    
    res.json({
      summary: { totalFields, activeFields, recentUpdates },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

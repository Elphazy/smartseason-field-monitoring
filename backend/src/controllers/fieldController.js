const { Field, FieldUpdate, FieldStage } = require('../models');

const fieldController = {
  async getAllFields(req, res) {
    try {
      const fields = await Field.findAll({
        where: { user_id: req.user.id },
        include: [
          { model: FieldUpdate, limit: 5, order: [['created_at', 'DESC']] },
          { model: FieldStage, limit: 1, order: [['created_at', 'DESC']] },
        ],
        order: [['created_at', 'DESC']],
      });
      res.json({ fields });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getField(req, res) {
    try {
      const field = await Field.findOne({
        where: { id: req.params.id, user_id: req.user.id },
        include: [
          { model: FieldUpdate, order: [['created_at', 'DESC']] },
          { model: FieldStage, order: [['created_at', 'DESC']] },
        ],
      });
      if (!field) {
        return res.status(404).json({ error: 'Field not found' });
      }
      res.json({ field });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createField(req, res) {
    try {
      const field = await Field.create({
        ...req.body,
        user_id: req.user.id,
      });
      res.status(201).json({ message: 'Field created successfully', field });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateField(req, res) {
    try {
      const field = await Field.findOne({
        where: { id: req.params.id, user_id: req.user.id },
      });
      if (!field) {
        return res.status(404).json({ error: 'Field not found' });
      }
      await field.update(req.body);
      res.json({ message: 'Field updated successfully', field });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteField(req, res) {
    try {
      const field = await Field.findOne({
        where: { id: req.params.id, user_id: req.user.id },
      });
      if (!field) {
        return res.status(404).json({ error: 'Field not found' });
      }
      await field.destroy();
      res.json({ message: 'Field deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = fieldController;

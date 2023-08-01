// Import required modules
const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a category by its ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'Category not found'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(201).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// PUT (update) a category
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      res.status(404).json({ message: 'Category not found'});
      return;
    }

    await category.update(req.body);
    res.status(200).json({ message: 'Category updated successfully'});
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// DELETE a category
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (category) {
      await category.destroy();
      res.status(200).json({ message: 'Category deleted successfully'});
    } else {
      res.status(404).json({ message: 'Category not found'});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

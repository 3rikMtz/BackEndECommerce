const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//this route allows to retrieve all the catgories from db 
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({ //this method is used to retrieve all categories from the db
      include: [Product], //include specifiy that Product shold be included in the query 
    }); //succesfull response 
    res.status(200).json(categoryData); 
  } catch (err) { //handle errors
    console.log(err); 
    res.status(500).json(err); 
  }
});

///api/categories/1 will retrieve the category with id equal to 1
router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id; //retrieve the category id from the url param

    const categoryData = await Category.findByPk(categoryId, { //find the category in the bd based on the id 
      include: [Product], //Porduct should be included in the query 
    }); 
    if (!categoryData) {
      res.status(404).json({ message: 'Category not found'}); 
      return; 
    }
    res.status(200).json(categoryData); 
  } catch (error) {
    console.log(err); 
    res.status(500).json(err); 
  }
});

//for this function we dont need enay parameter, since this function creates a new category
//this route sends a POST request to /api/categories 
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req. body); 
    res.status(201).json(categoryData); 
  } catch (err) {
    console.log(err); 
    res.status(400).json(err); 
  }
});

//this ruoute allow us to update a category by its id 
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);  //find the category in the db based on the provided id

    if (!category) {
      res.status(404).json({ message: 'Category not foud' }); //if the category doesnt exists 
      return; 
    }
    await category.update(req.body); 

    res.status(200).json({ message: 'Category updated succesfully' }); 
  } catch (err) {
    console.log(err); 
    res.status(400).json(err); 
  }
});

router.delete('/:id', async (req, res) => {
  try { //find the category by its id
    const category = await Category.findByPk(req.params.id); 

    if (category) {
      await category.destroy(); 
      res.status(200).json({ message: 'Category deleted successfully'});  
    } else {
      res.status(404).json({ message: 'Product not found' }); 
    }
  } catch (err) {
    console.log(err); 
    res.status(500).json(err); 
  }
});

module.exports = router;

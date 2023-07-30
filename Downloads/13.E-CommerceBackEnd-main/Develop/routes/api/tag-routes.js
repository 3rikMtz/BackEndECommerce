const router = require('express').Router();
//import the required models 
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({ //Tag.findAll() retrieve all tags 
      include: [
        {
          model: Product,
          through: ProductTag, 
        },
      ],
    }); 
    res.status(200).json(tagData); 
  } catch (err) {
    console.log(err); 
    res.status(500).json(err); 
  }
});

//function handles the GET request retrieving a single tag by its id
router.get('/:id', async (req, res) => {
  try {
    //get the tag id from the url parameter 
    const tagId = req.params.id; 

    const tagData = await Tag.findByPk(tagId, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    }); 
    //if tagData is null the message 'Tag not found' will be printed
    if (!tagData) {
      res.status(404).json({ message: 'Tag not found'}); 
      return; 
    }
    res.status(200).json(tagData); 
  } catch (err) {
    console.log(err); 
    res.status(500).json(err); 
  }
});

//this function will handle the POST request to the endpoint '/'
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);  //this line is used to create a new tag in the db, create is a sequelize method 
    //the req.body should contain the values for creating a new tag
    res.status(201).json(tagData); 
  } catch (err) {
    console.log(err); 
    res.status(400).json(err); 
  }
});

//this function handles PUT request,the ':id' paramaeter allows to acces to the tag ID, provided in the URL 
router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id); //find the tag by its id
    //if the tag id doesnt exist the error will be indicated 
    if (!tag) {
      res.status(404).json({ message: 'Tag not found'}); 
      return; 
    }
    tag.name = req.body.name; //assing the new name form the req.body.name
    await tag.save(); //the updated tag its saved in the db 

    res.status(200).json({ message: 'Tag updated succesfully'}); 
  } catch (err) {
    console.log(err); 
    res.status(500).json(err); 
  }
});

//handles the Delete request the :id parameter allows acces to the tags id provided in the URL
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id); //find tag by its id
    
    if (!tag) {
      res.status(404).json({ message: 'Tag not found'}); 
      return; 
    }
    await tag.destroy(); //destroy methos is called to delete the tag from the db

    res.status(200).json({ message: 'Tag deleated successfully'}); 
  } catch (err) {
    console.log(err); 
    res.status(500).json(err); 
  }
});

module.exports = router;

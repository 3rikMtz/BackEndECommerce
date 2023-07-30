const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  try {
    const productData = await Product.findAll({
      include: [Category, Tag],
    }); 
    res.status(200).json(productData); 
  } catch (err) {
    res.status(500).json(err); 
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    //this line is used to get the product id from the url
    const productId = req.params.id; 
    
    const productData = await Product.findByPk(productId, {
      include: [Category, Tag],
    }); 
    if (!productData) {
      res.status(404).json({ message: 'Product not found'}); 
      return; 
    }
    res.status(200).json(productData); 
  } catch (err) {
    res.status(500).json(err); 
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);

    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tagId) => ({
        product_id: product.id,
        tag_id: tagId,
      }));
      await ProductTag.bulkCreate(productTagIdArr);
    }

    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    // Update product data
    const [rowsAffected] = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (rowsAffected > 0) {
      // If the update was successful
      if (req.body.tagIds && req.body.tagIds.length) {
        const productTags = await ProductTag.findAll({
          where: { product_id: req.params.id },
        });

        // Create filtered list of new tag_ids
        const productTagIds = productTags.map(({ tag_id }) => tag_id);
        const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });

        // Figure out which ones to remove
        const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);

        // Run both actions
        await Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
        ]);
      }

      res.status(200).json({ message: 'Product updated successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


// delete one product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    // Find the product by its id
    const product = await Product.findByPk(req.params.id);

    // If the product is found, delete it
    if (product) {
      await product.destroy();
      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
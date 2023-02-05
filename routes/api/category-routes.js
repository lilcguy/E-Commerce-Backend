const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({include: Product }).then((categories) => {
    res.json(categories);
  });
 
  

  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {

  // find one category by its `id` value
  Category.findByPk(req.params.id, {include: Product}).then((categories) => {
    res.json(categories);
  });
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then((newCategory) => {
    res.json(newCategory);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, { where: { id: req.params.id} } ).then((updatedCategory) => {
  res.json(updatedCategory);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({ where: { id: req.params.id} }).then((res.json("Category deleted.")));
  // delete a category by its `id` value
});

module.exports = router;

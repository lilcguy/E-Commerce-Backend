const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({include: Product}).then((tagData) => {
    res.json(tagData);
  });
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {include: Product, where: {id: req.params.id}}).then((tags) => { 

    if (!tags) {
      res.status(404).json({ message: 'No product with this id found'});
        return;
    }
    res.status(200).json(tags);
  // find a single tag by its `id`
  // be sure to include its associated Product data
})
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then((updatedTag) => {
    res.json(updatedTag);
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id}}).then((updatedTag) => {

    res.json(updatedTag);
  })
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where: {id: req.params.id}}).then((deletedTag) => {
    if (!deletedTag) {
      res.status(404).json({ message: 'No tag with this id found'});
        return;
    }
    res.json("Tag deleted.")
  });
});

module.exports = router;

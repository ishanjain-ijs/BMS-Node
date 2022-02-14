var db = require('../../models')
const Category =db.categories


const getAllCategories = async (req, res) => {
  const categories = await Category.findAll({
    attributes: ['catName']
    }
  )
  if (!categories) return res.status(204).json({ message: "No categories found." });
  res.json(categories);
};

const createNewCategory = async (req, res) => {
  // console.log(req)
    
    var category = await Category.create({
        "catName": catName
    });
    category.save().then(category => {
        res.send(category);
    }, (e) => {
        res.status(400).send(e);
    })
  };

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.email === req.body.email) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.email === req.body.email) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCategories,
  createNewCategory,
  updatePost,
  deletePost,
  getPost,
};

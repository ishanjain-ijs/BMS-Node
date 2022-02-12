var db = require('../models')
const Post =db.posts


const getAllPosts = async (req, res) => {
  const posts = await Post.findAll({
    attributes: ['username', 'title', 'desc', 'photo']
    }
  )
  if (!posts) return res.status(204).json({ message: "No posts found." });
  res.json(posts);
};

const createNewPost = async (req, res) => {
  // console.log(req)
    
    var post = await Post.create({
        title: req.body.title,
        desc: req.body.desc,
        username: req.body.username
    });
    post.save().then(post => {
        res.send(post);
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
  getAllPosts,
  createNewPost,
  updatePost,
  deletePost,
  getPost,
};

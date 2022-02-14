var db = require('../models')
const Comment =db.comments


const getAllComments = async (req, res) => {
  const comments = await Comment.findAll({
    attributes: ['username', 'content']
    }
  )
  if (!comments) return res.status(204).json({ message: "No comments found." });
  res.json(comments);
};

const createNewComment = async (req, res) => {
  // console.log(req)
    
    var comment = await Comment.create({
        content: req.body.content,
        username: req.body.username
    });
    comment.save().then(comment => {
        res.send(comment);
    }, (e) => {
        res.status(400).send(e);
    })
  };

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment.email === req.body.email) {
      try {
        const updatedComment = await Comment.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedComment);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your comment!");
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
  getAllComments,
  createNewComment,
  updateComment,
  deletePost,
  getPost,
};


const Post = require("../../models/postSchema");
const User = require("../../models/userSchema");
const getAllPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  if (!posts) return res.status(204).json({ message: "No posts found." });
  res.json(posts);
};

const createNewPost = (req, res) => {
  // console.log(req)
    
    var post = new Post({
        title: req.body.title,
        desc: req.body.desc,
        author: req.params.id
    });
    post.save().then(post => {
        res.send(post);
    }, (e) => {
        res.status(400).send(e);
    })
  };

  const updatePost = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID is required.' });
    }

    const post = await Post.findOne({ _id: req.body.id }).exec();
    if (!post) {
        return res.status(204).json({ "message": `No post matches ID ${req.body.id}.` });
    }
    if (req.body?.title) post.title = req.body.title;
    if (req.body?.desc) post.desc = req.body.desc;
    const result = await post.save();
    res.json(result);
}

const deletePost = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Post ID required.' });

    const post = await Post.findOne({ _id: req.body.id }).exec();
    if (!post) {
        return res.status(204).json({ "message": `No post matches ID ${req.body.id}.` });
    }
    const result = await post.deleteOne({ _id: req.body.id });
    res.json(result);
}

const getPost = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Post ID required.' });

    const post = await Post.findOne({ _id: req.params.id }).exec();
    if (!post) {
        return res.status(204).json({ "message": `No post matches ID ${req.params.id}.` });
    }
    res.json(post);
}

module.exports = {
  getAllPosts,
  createNewPost,
  updatePost,
  deletePost,
  getPost,
};

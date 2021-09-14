const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

module.exports.getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(400).json({ messsage: error.messsage });
  }
};

module.exports.createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ messsage: error.messsage });
  }
};

module.exports.updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: `Invalid post id : ${_id}` });

  // {...post,_id} reson to create new obj from frontend {title,creator etc so ...post request};

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.status(200).json({ message: "Update post successfully", updatedPost });
};

module.exports.deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ message: `Invalid post id : ${id}` });

  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted Successfully." });
};

module.exports.likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ message: `Invalid post id : ${id}` });

  const post = await PostMessage.findById(id);

  const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount + 1},{new : true});

  res.json(updatedPost);
};

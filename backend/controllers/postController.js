const Post =
  require("../models/Post");


// CREATE POST
const createPost =
  async (req, res) => {
    try {

      const {
        title,
        content,
      } = req.body;

      const post =
        await Post.create({
          title,
          content,
          author:
            req.user.id,
        });

      res.status(201).json(
        post
      );

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };


// GET ALL POSTS
const getPosts =
  async (req, res) => {
    try {

      const posts =
        await Post.find()
          .populate(
            "author",
            "name"
          );

      res.json(posts);

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };
const updatePost =
  async (req, res) => {
    try {

      const post =
        await Post.findById(
          req.params.id
        );

      if (!post) {
        return res.status(404).json({
          message:
            "Post not found",
        });
      }

      post.title =
        req.body.title ||
        post.title;

      post.content =
        req.body.content ||
        post.content;

      const updatedPost =
        await post.save();

      res.json(
        updatedPost
      );

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
};
const deletePost =
  async (req, res) => {
    try {

      const post =
        await Post.findById(
          req.params.id
        );

      if (!post) {
        return res.status(404).json({
          message:
            "Post not found",
        });
      }

      await post.deleteOne();

      res.json({
        message:
          "Post deleted successfully",
      });

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
};
module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};
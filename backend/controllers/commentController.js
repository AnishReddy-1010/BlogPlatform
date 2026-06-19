const Comment =
  require("../models/Comment");


// ====================
// ADD COMMENT
// ====================

const addComment =
  async (req, res) => {
    try {

      const {
        postId,
        text,
      } = req.body;

      const comment =
        await Comment.create({
          post: postId,
          user: req.user.id,
          text,
        });

      res.status(201).json(
        comment
      );

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };


// ====================
// GET COMMENTS
// ====================

const getComments =
  async (req, res) => {
    try {

      const comments =
        await Comment.find({
          post:
            req.params.postId,
        })
          .populate(
            "user",
            "name"
          );

      res.json(comments);

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };
const deleteComment =
  async (req, res) => {
    try {

      const comment =
        await Comment.findById(
          req.params.id
        );

      if (!comment) {
        return res.status(404).json({
          message:
            "Comment not found",
        });
      }

      await comment.deleteOne();

      res.json({
        message:
          "Comment deleted successfully",
      });

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
};
module.exports = {
  addComment,
  getComments,
  deleteComment,
};
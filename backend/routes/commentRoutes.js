const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const {
  addComment,
  getComments,
  deleteComment,
} = require(
  "../controllers/commentController"
);

router.post(
  "/",
  authMiddleware,
  addComment
);

router.get(
  "/:postId",
  getComments
);

router.delete(
  "/:id",
  authMiddleware,
  deleteComment
);
module.exports =
  router;
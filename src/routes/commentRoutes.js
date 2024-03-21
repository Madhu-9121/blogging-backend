const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const authenticateToken = require("../middleware/authenticateToken");

router.post("/:postId/comments",authenticateToken,commentController.postComment)
router.get("/:postId/comments",authenticateToken,commentController.getComments)




module.exports = router;

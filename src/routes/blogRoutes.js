const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')
const authenticate = require('../middleware/authenticateToken')

router.post('/blogposts',authenticate,blogController.createBlog)
router.get('/blogposts',authenticate,blogController.getBlogs)
router.put('/blogposts/:id',authenticate,blogController.updateBlog)
router.delete('/blogposts/:id',authenticate,blogController.deleteBlog)

module.exports = router
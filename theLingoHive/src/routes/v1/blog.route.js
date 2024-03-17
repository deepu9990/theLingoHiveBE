const express = require('express');
const router = express.Router();

// Import necessary controllers and middleware
const blogController = require('../../controllers/blog.controller');
const authMiddleware = require('../../middlewares/auth');

// Define routes for creating and getting blogs
router.post('/', blogController.createBlog);
router.get('/', blogController.getAllBlogs);

module.exports = router;

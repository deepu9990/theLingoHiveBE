const httpStatus = require('http-status');
const Blog = require('../models/blog.model');

// Controller to create a new blog
const createBlog = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    // const userId = req.user.id; // Assuming you have user authentication middleware

    const blog = new Blog({
      title,
      content,
      //   user: userId,
    });

    await blog.save();
    res.status(httpStatus.CREATED).json(blog);
  } catch (error) {
    next(error);
  }
};

// Controller to get all blogs
const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find().populate('user', 'name email'); // Assuming 'user' is the reference field in Blog model
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
};

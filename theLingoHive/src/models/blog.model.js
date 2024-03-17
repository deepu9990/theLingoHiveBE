const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User', // Assuming you have a User model and 'User' is the model name
  //     required: true,
  //   },
});

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;

// models/project-model.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    image: String,
    heading: String,
    paragraph: String,
    link: String,
  },
  { timestamps: true } // ✅ Adds createdAt and updatedAt
);

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;

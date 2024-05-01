//tells how is our schema... name and description about project table
const mongoose = require('./db');

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

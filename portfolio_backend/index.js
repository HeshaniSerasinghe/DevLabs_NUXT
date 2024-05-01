//ENTRY POINT
const express = require('express'); //created an express app
const app = express();
const port = 5000; //in which port our app is running


require('dotenv').config();
const Project = require('./project');

app.get('/', (req, res) => {  //the two end points here are / and /projects
    res.send('Hello, World!');
});

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => { //this runs on 0app.listen
    console.log(`Server running at http://localhost:${port}/`);
});


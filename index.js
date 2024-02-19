// Import necessary modules
import express from "express";
import bodyParser from 'body-parser';
import { Console } from "console";

// Create an instance of Express
const app = express();
const port = 3000;

// Dummy array to store tasks
let homeTasks = [];
let workTasks = [];

// Middleware to parse urlencoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Define the route to render the home page
app.get('/', (req, res) => {
    res.render('home.ejs', { homeTasks }); // Pass the tasks array to the home.ejs view
});
app.get('/work', (req, res) => {
    res.render('work.ejs', { workTasks }); // Pass the tasks array to the home.ejs view
});



// Define the route for handling form submissions
app.post('/HomeTask', (req, res) => {
    const task = req.body.text;
    console.log(task);
    if (task) {
        homeTasks.push(task);
        res.redirect('/'); // Redirect back to the home page
    } else {
        res.status(400).send('Invalid data');
    }
});
app.post('/workTask', (req, res) => {
    const task = req.body.text;
    console.log(task);
    if (task) {
        workTasks.push(task);
        res.redirect('/work'); // Redirect back to the home page
    } else {
        res.status(400).send('Invalid data');
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

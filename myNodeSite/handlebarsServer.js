const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');  // Correct import

const app = express();
const PORT = 1337;

// Middleware to log each request
app.use((req, res, next) => {
    console.log(`User is visiting: ${req.url}`);
    next();  // This allows the request to continue to the next middleware/route
});


// Set Handlebars as the view engine
const hbs = exphbs.create({
    extname: 'hbs',  // Define file extension for handlebars
    defaultLayout: 'main',  // Optional: Set default layout (main.hbs)
    layoutsDir: path.join(__dirname, 'views', 'layouts'),  // Path to layouts
});

app.engine('hbs', hbs.engine);  // Correctly reference the engine
app.set('view engine', 'hbs');  // Use hbs for view engine

// Define the public directory path
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir)); // Serve static files from the public directory

// Route for main pages
app.get('/', (req, res) => {
    res.render('index');  // Renders index.hbs in the views directory
});

app.get('/about.hbs', (req, res) => {
    res.render('about-viola-and-julius');  // renders about-viola-and-julius.hbs
});

// Other routes as necessary for your site...

// Handle 404 errors for undefined routes
app.use((req, res) => {
    res.status(404).render('error404');  // Renders error404.hbs in the views directory
});

// Handle 500 errors for server issues
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error500');  // Renders error500.hbs in the views directory
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

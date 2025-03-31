const express = require('express');
const path = require('path');

// Create the Express app
const app = express();

// Define the port
const PORT = 1337;

// Define the public directory path
const publicDir = path.join(__dirname, 'public');

// Serve static files from the 'public' directory, including subfolders
app.use(express.static(publicDir));

// Serve specific routes for main pages
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(publicDir, 'web404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


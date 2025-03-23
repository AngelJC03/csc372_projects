const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port
const PORT = 1337;

// Function to serve static files
function serveStaticFile(res, filePath, contentType, statusCode = 200) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Error reading file: ${filePath}`);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1>');
        } else {
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

// Create HTTP server
const server = http.createServer((req, res) => {
    console.log(`Incoming request: ${req.url}`);

    // Normalize URL (remove query, lowercase, and remove trailing slash)
    let parsedUrl = req.url.split('?')[0].toLowerCase().replace(/\/$/, '');
    if (parsedUrl === '') parsedUrl = '/';

    if (req.url === '/favicon.ico') {
        res.writeHead(204, { 'Content-Type': 'image/x-icon' });
        return res.end();
    }

    // Define the public directory
    const PUBLIC_DIR = path.join(__dirname, 'public');

    // Map file extensions to content types
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.json': 'application/json'
    };

    // Default file path (index.html if requesting "/")
    let filePath = parsedUrl === '/' ? 'index.html' : parsedUrl.substring(1);
    filePath = path.join(PUBLIC_DIR, filePath);

    // Determine the file extension and content type
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.warn(`404 Not Found: ${filePath}`);
            serveStaticFile(res, path.join(PUBLIC_DIR, 'web404.html'), 'text/html', 404);
        } else {
            serveStaticFile(res, filePath, contentType);
        }
    });
});


// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

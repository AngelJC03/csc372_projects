<?php
$type     = 'mysql';                        // Type of database (MySQL)
$server   = '192.185.2.183';                // Server the database is on
$db       = 'angelcas_newsarticles';    // Name of the database
$port     = '3306';                         // Port (usually 3306 for MySQL)
$charset  = 'utf8mb4';                      // UTF-8 encoding using 4 bytes per char

// Create DSN (Data Source Name)
$dsn = "$type:host=$server;dbname=$db;port=$port;charset=$charset";

// Database credentials
$username = 'angelcas_angelcastano';              // Username for DB
$password = 'Theskyismyql1!';              // Password for DB

// Set options for PDO
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,  // Throw exceptions on errors
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,        // Fetch data as an associative array
    PDO::ATTR_EMULATE_PREPARES   => false,                    // Use real prepared statements
    PDO::ATTR_STRINGIFY_FETCHES  => false,                    // Return integers as integers
];

try {
    // Create PDO instance and attempt to connect
    $pdo = new PDO($dsn, $username, $password, $options);
    echo "Connected successfully!";
} catch (PDOException $e) {
    // If an exception occurs, rethrow it
    echo "Connection failed: " . $e->getMessage();  // In a real environment, consider logging this error instead
}

?>

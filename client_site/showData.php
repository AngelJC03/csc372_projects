<?php
// Include DB connection and helper function
include 'connectToDB.php';
include 'functions.php';  // if you saved pdo() in a separate file

// Step 1: Get query string value for link and validate it
if (!isset($_GET['link']) || empty($_GET['link'])) {
    echo "<p>Invalid article link.</p>";
    exit;
}

$articleLink = $_GET['link'];  // the article's unique link

// Step 2: Prepare SQL with a placeholder using the link column
$sql = "SELECT date, title, description, link, imageurl FROM articles WHERE link = :link";

// Step 3: Run the query using the pdo() helper (assumes your helper function exists)
$stmt = pdo($pdo, $sql, ['link' => $articleLink]);

// Step 4: Fetch the single article record
$article = $stmt->fetch();

if ($article) {
    // Sanitize output using htmlspecialchars to prevent XSS attacks
    $date    = htmlspecialchars($article['date']);
    $title   = htmlspecialchars($article['title']);
    $desc    = htmlspecialchars($article['description']);
    $link    = htmlspecialchars($article['link']);
    $imgUrl  = htmlspecialchars($article['imageurl']);

    echo "<div class='article'>";
    echo "<h2>$title</h2>";
    echo "<p><strong>Date:</strong> $date</p>";
    echo "<p>$desc</p>";
    echo "<p><strong>Link:</strong> <a href='$link'>$link</a></p>";
    
    // Optionally display the image if imageurl is provided
    if (!empty($imgUrl)) {
        echo "<img src='$imgUrl' alt='" . $title . " image' style='max-width:100%;height:auto;'/>";
    }
    echo "</div>";
} else {
    echo "<p>No article found for that link.</p>";
}
?>

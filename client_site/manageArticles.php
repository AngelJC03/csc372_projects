<?php
include 'connectToDB.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the requested action from the POST data.
    $action = $_POST['action'] ?? '';

    switch ($action) {
        case 'insert':
            // Get input values for insertion
            $title = $_POST['title'] ?? '';
            $description = $_POST['description'] ?? '';
            $date = $_POST['date'] ?? '';       // Date of the article (you may call it publish date)
            $link = $_POST['link'] ?? '';       // Unique link used as identifier
            $imageurl = $_POST['imageurl'] ?? ''; // Optional image URL

            // Ensure that required fields are provided.
            if ($title && $description && $date && $link) {
                // Insert new article into the database
                $sql = "INSERT INTO articles (date, title, description, link, imageurl)
                        VALUES (:date, :title, :description, :link, :imageurl)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([
                    'date'        => $date,
                    'title'       => $title,
                    'description' => $description,
                    'link'        => $link,
                    'imageurl'    => $imageurl
                ]);
                echo "<p>✅ Article added successfully!</p>";
            } else {
                echo "<p>⚠️ Please fill out the date, title, description, and link fields.</p>";
            }
            break;

        case 'update':
            // For updating, we assume that the article is identified by the unique 'link'
            $link = $_POST['link'] ?? '';
            $title = $_POST['title'] ?? '';
            $description = $_POST['description'] ?? '';
            $date = $_POST['date'] ?? '';
            $imageurl = $_POST['imageurl'] ?? '';

            if ($link && $title && $description && $date) {
                $sql = "UPDATE articles 
                        SET date = :date,
                            title = :title,
                            description = :description,
                            imageurl = :imageurl
                        WHERE link = :link";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([
                    'date'        => $date,
                    'title'       => $title,
                    'description' => $description,
                    'imageurl'    => $imageurl,
                    'link'        => $link
                ]);
                $rows = $stmt->rowCount();
                echo "<p>✏️ $rows article(s) updated.</p>";
            } else {
                echo "<p>⚠️ All fields (date, title, description, and link) are required to update.</p>";
            }
            break;

        case 'delete':
            // For deletion, we only need the unique 'link'
            $link = $_POST['link'] ?? '';
            if ($link) {
                $sql = "DELETE FROM articles WHERE link = :link";
                $stmt = $pdo->prepare($sql);
                $stmt->execute(['link' => $link]);
                $rows = $stmt->rowCount();
                echo "<p>🗑️ $rows article(s) deleted.</p>";
            } else {
                echo "<p>⚠️ You must provide the article link to delete an article.</p>";
            }
            break;

        default:
            echo "<p>❌ Invalid action.</p>";
    }
}
?>

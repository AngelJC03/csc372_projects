<!DOCTYPE html>
<html>
<head>
  <title>Test Insertion</title>
</head>
<body>

  <h1>Manage Articles Forms</h1>

  <!-- Insert Form -->
  <form action="manageArticles.php" method="POST">
    <h2>Add Article</h2>
    <input type="hidden" name="action" value="insert">
    <input type="date" name="date" required placeholder="Date"><br>
    <input type="text" name="title" placeholder="Title" required><br>
    <textarea name="description" placeholder="Description" required></textarea><br>
    <input type="text" name="link" placeholder="Unique Link" required><br>
    <input type="text" name="imageurl" placeholder="Image URL (optional)"><br>
    <button type="submit">Add Article</button>
  </form>

  <hr>

  <!-- Update Form -->
  <form action="manageArticles.php" method="POST">
    <h2>Update Article</h2>
    <!-- Update requires the unique link to identify the article -->
    <input type="hidden" name="action" value="update">
    <input type="text" name="link" placeholder="Article Link (unique identifier)" required><br>
    <input type="date" name="date" required placeholder="New Date"><br>
    <input type="text" name="title" placeholder="New Title" required><br>
    <textarea name="description" placeholder="New Description" required></textarea><br>
    <input type="text" name="imageurl" placeholder="New Image URL (optional)"><br>
    <button type="submit">Update Article</button>
  </form>

  <hr>

  <!-- Delete Form -->
  <form action="manageArticles.php" method="POST">
    <h2>Delete Article</h2>
    <input type="hidden" name="action" value="delete">
    <input type="text" name="link" placeholder="Article Link to delete" required><br>
    <button type="submit">Delete Article</button>
  </form>

</body>
</html>

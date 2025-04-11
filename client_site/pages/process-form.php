<?php
include 'validation.php';  // Include your validation functions file

// Define valid colors
$validColors = ['blue', 'red', 'orange', 'yellow', 'other'];

// Initialize form values and error messages
$firstName = $_POST['firstName'] ?? '';
$lastName = $_POST['lastName'] ?? '';
$phone = $_POST['phone'] ?? '';
$color = $_POST['color'] ?? '';  // Single-select for color

$firstNameError = $lastNameError = $phoneError = $colorError = '';
$successMessage = $errorMessage = '';

// Validate form data on submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate First Name
    if (!isValidText($firstName)) {
        $firstNameError = "First name must be between 3 and 50 characters.";
    }

    // Validate Last Name
    if (!isValidText($lastName)) {
        $lastNameError = "Last name must be between 3 and 50 characters.";
    }

    // Validate Phone Number
    if (!isValidPhoneNumber($phone)) {
        $phoneError = "Please enter a valid 10-digit phone number.";
    }

    // Validate Color (Single-select)
    if (empty($color) || !in_array($color, $validColors)) {
        $colorError = "Please select a valid color.";
    }

    // If there are no errors, process the data
    if (empty($firstNameError) && empty($lastNameError) && empty($phoneError) && empty($colorError)) {
        // Set a cookie to store user's first name
        setcookie('userName', htmlspecialchars($firstName), time() + (30 * 24 * 60 * 60), '/'); // Cookie expires in 30 days
        $successMessage = "Form submitted successfully!";
    } else {
        $errorMessage = "There were errors with your submission.";
    }
}
?>

<!-- Your form HTML and validation messages go here -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Info Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f2f5;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    form {
      background-color: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
    }
    input, select {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.25rem;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    button {
      margin-top: 1.5rem;
      padding: 0.75rem;
      width: 100%;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

    <div>
      <?php
        if ($successMessage) {
          echo "<p style='color: green;'>$successMessage</p>";
          echo '<a href="../index.html">Return to Home Page</a>';
        } elseif ($errorMessage) {
          echo "<p style='color: red;'>$errorMessage</p>";
        }
      ?>
    </div>
  </form>

</body>
</html>

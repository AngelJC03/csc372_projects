<?php
// Function to validate text input length
function isValidText($input, $minLength = 3, $maxLength = 50) {
    $length = strlen($input);
    return $length >= $minLength && $length <= $maxLength;
}

// Function to validate phone number (10 digits)
function isValidPhoneNumber($phone) {
    return preg_match("/^[0-9]{10}$/", $phone);  // Matches exactly 10 digits
}

// Function to validate selected options (multiple select)
function isValidColor($color, $validColors) {
    return in_array($color, $validColors);
}
?>
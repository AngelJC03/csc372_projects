<?php
function pdo(PDO $pdo, string $sql, array $arguments = null) {
    if (!$arguments) {                 // If no arguments provided
        return $pdo->query($sql);   // Run SQL query & return PDOStatement object
    }

    $statement = $pdo->prepare($sql);   // If arguments, prepare SQL statement
    $statement->execute($arguments);  // Bind & execute SQL statement w/args
    return $statement;               // Return PDOStatement object
}

?>
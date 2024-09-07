<?php
// Configuration
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'sps';

// Create connection
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $phone_number = $_POST["phone_no"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm-password"];

    // Check if passwords match
    if ($password != $confirm_password) {
        echo "Error: Passwords do not match";
        exit;
    }

    // Insert data into database
    $sql = "INSERT INTO users (username, email, phone_number, passw) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $username, $email, $phone_number, $password);

    if ($stmt->execute()) {
        echo "Success: User created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}

?>
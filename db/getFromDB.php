<?php

// Add this at the very top of the file, before any output
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// If it's an OPTIONS request (CORS preflight), exit early
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "cashier";

    $conn = new mysqli($host, $user, $pass, $db);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $result = $conn->query("SELECT * FROM stocks ORDER BY id ASC");

    $stocks = [];
    while ($row = $result->fetch_assoc()) {
        $stocks[] = $row;
    }

    header('Content-Type: application/json');
    echo json_encode($stocks);
    $conn->close();
?>
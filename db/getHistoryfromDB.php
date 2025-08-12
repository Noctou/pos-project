<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

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

    $result = $conn->query("SELECT * FROM history");

    $history = [];
    while ($row = $result->fetch_assoc()) {
        $history[] = $row;
    }

    header('Content-Type: application/json');
    echo json_encode($history);
    $conn->close();
?>
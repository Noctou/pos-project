<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "cashier";

    $conn = new mysqli($host, $user, $pass, $db);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $history_stmt = $conn -> prepare("INSERT INTO history (time, product_name, product_type, quantity, total_price)
                                    VALUES (?, ?, ?, ?, ?);");
                                    
    
    $data = json_decode(file_get_contents("php://input"), true);

    foreach ($data as $item) {
        $time = $item['time'];
        $name = $item['product_name'];
        $type = $item['product_type'];
        $quantity = (int)$item['quantity'];
        $total_price = (int)$item['total_price'];

        $history_stmt -> bind_param("sssii", $time, $name, $type, $quantity, $total_price);
        $history_stmt -> execute();
    }

    $history_stmt -> close();
    $conn->close();

    echo "Success";
?>
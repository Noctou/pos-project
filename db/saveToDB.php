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

    // insert into table
    // but updates table when id is existing
    $upsert_stmt = $conn -> prepare("INSERT INTO stocks (id, product_name, product_type, price, status, stocks_quantity)
                                    VALUES (?, ?, ?, ?, ?, ?)
                                    ON DUPLICATE KEY UPDATE
                                    product_name = VALUES(product_name),
                                    product_type = VALUES(product_type),
                                    price = VALUES(price),
                                    status = VALUES(status),
                                    stocks_quantity = VALUES(stocks_quantity)");
                                    
    $upsert_stmt -> bind_param("issdsi", $id, $name, $type, $price, $status, $quantity);

    $data = json_decode(file_get_contents("php://input"), true);

    foreach ($data as $item) {
        $id = !empty($item['id']) ? (int)$item['id'] : null;
        $name = $item['product_name'];
        $type = $item['product_type'];
        $price = $item['price'];
        $status = $item['status'];
        $quantity = (int)$item['stocks_quantity'];

        $upsert_stmt -> execute();
    }

    $upsert_stmt -> close();
    $conn->close();

    echo "Success";
?>
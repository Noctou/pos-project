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
    
    $data = json_decode(file_get_contents("php://input"), true);

    // insert into table
    // but updates table when id is existing
    $reduceQty_stmt = $conn -> prepare("UPDATE stocks SET 
                                        stocks_quantity = stocks_quantity - ? WHERE product_name = ? AND stocks_quantity >= ?");
                                    
    

    foreach ($data as $item) {
        $name = $item['name'];
        $quantity = (int)$item['quantity'];

        $reduceQty_stmt -> bind_param("isi", $quantity, $name, $quantity);
        $reduceQty_stmt -> execute();
    }

    $reduceQty_stmt -> close();
    $conn->close();

    echo "Success";
?>
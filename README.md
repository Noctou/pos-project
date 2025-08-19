# pos-project

## SETUP BACKEND (PHP)

1. Move 'db' folder (in the root directory) to your XAMPP 'htdocs' directory.
    for example: `C:xampp\htdocs\db`

2. Start the Apache server in XAMPP

---

## CREATE DATABASE (MySQL)
1. Start MySQL in XAMPP

2.
   ```
   CREATE DATABASE cashier;
    
   CREATE TABLE stocks (
       id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
       product_name VARCHAR(55),
       product_type VARCHAR(55),
       price int,
       status VARCHAR(55),
       stocks_quantity int
   );

   ```
3. ```
   CREATE TABLE history (
       time varchar(55),
       product_name varchar(55),
       product_type varchar(55),
       quantity int, total_price int
   );
   ```
---

## START FRONTEND (React)

1. run `npm run dev` in the terminal from the root directory of the project


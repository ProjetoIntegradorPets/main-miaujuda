<?php

session_start();
session_set_cookie_params(['lifetime' => 3600]);

// Definindo as variáveis de conexão
$host = "sql313.infinityfree.com";
$port = 3306;
$dbname = "if0_37518583_miaujudadb";
$user = "if0_37518583";
$pass = "UAaF6uLx2jRW56U";

// Montando a DSN
$conn = "mysql:host=$host;port=$port;dbname=$dbname;";

try {
    // Criando uma nova conexão PDO
    $pdo = new PDO($conn, $user, $pass);
    $pdo->exec("SET NAMES 'utf8'");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // $stmt = $pdo->query("SELECT VERSION()");
    // print($stmt->fetchColumn());
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

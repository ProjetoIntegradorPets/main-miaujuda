<?php
// Conexão com banco de dados
include_once('config.php');

try {
    // Verifica se o token e o tempo de expiração estão definidos
    if (isset($_SESSION['auth_token']) && isset($_SESSION['token_exp'])) {
        $token = $_SESSION['auth_token'];

        // Verifica se o token está válido no banco de dados
        $stmt = $pdo->prepare("SELECT email FROM USUARIO WHERE token = ? LIMIT 1");
        $stmt->execute([$token]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && time() < $_SESSION['token_exp']) {
            echo $user['email'];
        } else {
            unset($_SESSION['auth_token']);
            unset($_SESSION['token_exp']);
            echo "error";
        }
    } else {
        echo "error";
    }
} catch (PDOException $e) {
    echo "error";
}

// Fecha a conexão
$pdo = null;
?>

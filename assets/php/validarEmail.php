<?php
// Conexão com banco de dados
include_once('config.php');

try {
    if (isset($_POST['email'])) {
        $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

        // Consulta ao banco de dados para verificar se o e-mail existe
        $query = "SELECT * FROM USUARIO WHERE email = :email";

        // Preparando a query
        $stmt = $pdo->prepare($query);

        // Bind do parâmetro
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);

        // Executa a query
        $stmt->execute();

        // Verifica se o e-mail já existe
        if ($stmt->rowCount() > 0) {
            echo "exists";
        } else {
            echo "not_exists";  
        }
    }
} catch (PDOException $e) {
    echo "Erro na consulta: " . $e->getMessage();
}

// Fecha a conexão com o banco de dados
$pdo = null;
?>

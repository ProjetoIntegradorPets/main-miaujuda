<?php

// Conexão com banco de dados
include_once('config.php');

try {
    // Recebe os inputs
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $senha = filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_SPECIAL_CHARS); 

    // Query para buscar a senha hash no banco de dados usando prepared statements
    $query_get = "SELECT senha FROM USUARIO WHERE email = :email LIMIT 1";

    // Preparando a query
    $stmt = $pdo->prepare($query_get);

    // Bind do parâmetro
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);

    // Executa a query
    $stmt->execute();

    // Verifica se o e-mail foi encontrado
    if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $senha_hashed = trim($row['senha']);

        // Verifica se a senha fornecida corresponde ao hash
        if (password_verify($senha, $senha_hashed)) {
            echo 'success';
        } else {
            echo 'Senha incorreta, tente novamente. <br>';
        }
    } else {
        echo 'Usuário não encontrado.';
    }
} catch (PDOException $e) {
    echo "Erro na consulta: " . $e->getMessage();
}

// Fecha a conexão com o banco de dados
$pdo = null;
?>

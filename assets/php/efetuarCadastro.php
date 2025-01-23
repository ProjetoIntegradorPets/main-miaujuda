<?php
// Conexão com banco de dados
include_once('config.php');

try {
    // Recebe os inputs
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS); 
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $senha = filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_SPECIAL_CHARS); 
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Erro: email inválido.';
    }

    if (empty($nome) || strlen($nome) < 3){
        echo "Erro: nome inválido";
    }

    if (!preg_match("/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/", $senha)) {
        echo  "Erro: senha inválida.";
    }

    // Hash da senha
    $senhaHashed = password_hash($senha, PASSWORD_DEFAULT);
    
    // Query de inserção com prepared statement
    $queryInsert = "INSERT INTO USUARIO (nome, email, senha, token) VALUES (:nome, :email, :senha, NULL)";

    // Preparando a query
    $stmt = $pdo->prepare($queryInsert);

    // Bind dos parâmetros
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':senha', $senhaHashed);

    // Executa a query
    if ($stmt->execute()) {
        echo 'success';
    } else {
        echo "Erro na inserção.";
    }
} catch (PDOException $e) {
    echo "Erro na inserção: " . $e->getMessage();
}

// Fecha a conexão
$pdo = null;
?>

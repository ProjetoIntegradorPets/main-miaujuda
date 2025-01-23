<?php

// Conexão com banco de dados
include_once('config.php');

// Obtém e sanitiza os dados do formulário
$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$tel = filter_input(INPUT_POST, 'tel', FILTER_SANITIZE_NUMBER_INT);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

// Converte o número para string e aplica a formatação
$numeroStr = (string) $tel;
$numeroFormatado = '(' . substr($numeroStr, 0, 2) . ') ' . substr($numeroStr, 2, 5) . '-' . substr($numeroStr, 7);

try {
    // Verifica se a conexão com o banco de dados foi estabelecida corretamente
    if (!$pdo) {
        die('Falha na conexão com o banco de dados.');
    }

    // Prepara a query com placeholders para evitar injeção de SQL
    $query = "UPDATE USUARIO SET nome = :nome, telefone = :telefone WHERE email = :email";

    // Prepara a declaração
    $stmt = $pdo->prepare($query);

    // Bind dos parâmetros
    $stmt->bindParam(':nome', $nome, PDO::PARAM_STR);
    $stmt->bindParam(':telefone', $numeroFormatado, PDO::PARAM_STR);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);

    // Executa a query
    if ($stmt->execute()) {
        echo "Dados atualizados com sucesso.";
    } else {
        echo "Erro ao atualizar os dados.";
    }

} catch (PDOException $e) {
    // Erro no banco de dados
    echo json_encode(["error" => "Erro na consulta: " . $e->getMessage()], JSON_UNESCAPED_UNICODE);
}

// Fechar a conexão
$pdo = null;

?>
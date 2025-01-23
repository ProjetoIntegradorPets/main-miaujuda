<?php

// Conexão com banco de dados
include_once('config.php');

// Obtém e sanitiza os dados do formulário
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
$id_ANIMAL = (string) $id;


try {
    // Verifica se a conexão com o banco de dados foi estabelecida corretamente
    if (!$pdo) {
        die('Falha na conexão com o banco de dados.');
    }

    // ==================================
    // Prepara a query com placeholders para evitar injeção de SQL
    $query = "DELETE FROM ANIMAL WHERE id = :id";

    // Prepara a declaração
    $stmt = $pdo->prepare($query);

    // Bind dos parâmetros
    $stmt->bindParam(':id', $id_ANIMAL, PDO::PARAM_STR);

    // executa a query
    $stmt->execute();

    // ==================================
    // Prepara a query com placeholders para evitar injeção de SQL
    $query = "DELETE FROM PETS_USUARIO WHERE fk_pet_id = :id";

    // Prepara a declaração
    $stmt = $pdo->prepare($query);

    // Bind dos parâmetros
    $stmt->bindParam(':id', $id_ANIMAL, PDO::PARAM_STR);

    // executa a query
    $stmt->execute();

    // ==================================
    // Prepara a query com placeholders para evitar injeção de SQL
    $query = "DELETE FROM ANIMAL_ADOCAO WHERE FK_ANIMAL_id = :id";

    // Prepara a declaração
    $stmt = $pdo->prepare($query);

    // Bind dos parâmetros
    $stmt->bindParam(':id', $id_ANIMAL, PDO::PARAM_STR);

    if ($stmt->execute()) {
        echo "Dados apagados com sucesso. ";
    } else {
        echo "Erro ao apagar os dados.";
    }

} catch (PDOException $e) {
    // Erro no banco de dados
    echo json_encode(["error" => "Erro na consulta: " . $e->getMessage()], JSON_UNESCAPED_UNICODE);
}

// Fechar a conexão
$pdo = null;

?>
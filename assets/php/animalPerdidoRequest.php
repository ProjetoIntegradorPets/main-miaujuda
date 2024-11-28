<?php

// Conexão com banco de dados
include_once('config.php');

try {
    // Teste de conexão
    if (!$pdo) {
        die('Falha na conexão com o banco de dados.');
    }

    // Query
    $query = "SELECT nome, raca, descricao, categoria 
              FROM ANIMAL ANIM 
              LEFT JOIN ANIMAL_ADOCAO ADOC 
              ON ANIM.id = ADOC.FK_ANIMAL_id
              JOIN TIPO 
              ON TIPO.id = ANIM.FK_TIPO_id
              WHERE ADOC.FK_ANIMAL_id IS NULL
              ";

    // Executa a query
    $stmt = $pdo->query($query);

    // Verifica se a consulta teve sucesso
    if ($stmt) {
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        // var_dump($result); // Mostra o resultado da consulta

        // Define o tipo de conteúdo como JSON
        header('Content-Type: application/json; charset=utf-8');

        // Se houver resultados, retorna como JSON
        if ($result) {
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        } else {
            echo json_encode(["message" => "Nenhum resultado encontrado."], JSON_UNESCAPED_UNICODE);
        }
    } else {
        echo "01. Erro na consulta.";
    }
} catch (PDOException $e) {
    // Erro no banco de dados
    echo json_encode(["error" => "Erro na consulta: " . $e->getMessage()], JSON_UNESCAPED_UNICODE);
}

// Fechar a conexão
$pdo = null;
?>

<?php

// Conexão com banco de dados
include_once('config.php');

try {
    // Teste de conexão
    if (!$pdo) {
        die('Falha na conexão com o banco de dados.');
    }

    // Declaração de consultas
    $queries = [
        "total_animais" => "SELECT COUNT(anim.id) AS total FROM ANIMAL anim",
        "total_caes" => "SELECT COUNT(anim.id) AS total FROM ANIMAL anim WHERE anim.FK_TIPO_id = 1",
        "total_gatos" => "SELECT COUNT(anim.id) AS total FROM ANIMAL anim WHERE anim.FK_TIPO_id = 2",
        "racas_mais_doadas" => "SELECT raca, count(raca) as total FROM ANIMAL AN 
                        JOIN ANIMAL_ADOCAO AD ON(AN.id = AD.FK_ANIMAL_id)
                        GROUP BY raca 
                        ORDER BY count(raca) DESC 
                        LIMIT 5"
    ];

    $resultados = [];

    // Executa cada consulta e salva os resultados
    foreach ($queries as $chave => $query) {
        $stmt = $pdo->query($query);
        
        if ($chave == 'racas_mais_doadas') {
            // Para a consulta de raças mais doadas, pegamos todas as linhas
            $resultados[$chave] = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            // Para as outras consultas, pegamos apenas o valor da contagem
            $resultados[$chave] = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
        }
    }

    // Calcula os percentuais
    $percentual_caes = ($resultados['total_caes'] / $resultados['total_animais']) * 100;
    $percentual_gatos = ($resultados['total_gatos'] / $resultados['total_animais']) * 100;

    // Adiciona percentuais ao resultado
    $resultados['percentual_caes'] = round($percentual_caes, 2);
    $resultados['percentual_gatos'] = round($percentual_gatos, 2);

    // Retorna os resultados em JSON
    header('Content-Type: application/json');
    echo json_encode($resultados, JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    // Erro no banco de dados
    echo json_encode(["error" => "Erro na consulta: " . $e->getMessage()], JSON_UNESCAPED_UNICODE);
}

// Fechar a conexão
$pdo = null;
?>

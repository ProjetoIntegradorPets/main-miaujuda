<?php
// Conexão com banco de dados
include_once('config.php');

try {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

    // Verifica se o email é válido
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception("Email inválido");
    }

    // Inicia transação
    $pdo->beginTransaction();

    $stmt = $pdo->prepare("DELETE FROM USUARIO WHERE email = ?");
    if (!$stmt->execute([$email])) {
        throw new Exception("Erro ao deletar usuário");
    }
    // Recupera o ID do pet associado ao email
    $stmt = $pdo->prepare("SELECT FK_pet_id FROM PETS_USUARIO WHERE email = ?");
    $stmt->execute([$email]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($row) {
        // Deleta registros na ordem: PETS_USUARIO -> USUARIO -> ANIMAL -> ANIMAL_ADOCAO
        $stmt = $pdo->prepare("DELETE FROM PETS_USUARIO WHERE email = ?");
        $stmt->execute([$email]);

        $stmt = $pdo->prepare("DELETE FROM ANIMAL WHERE id = ?");
        $stmt->execute([$row['FK_pet_id']]);

        $stmt = $pdo->prepare("DELETE FROM ANIMAL_ADOCAO WHERE id = ?");
        $stmt->execute([$row['FK_pet_id']]);
    }


    // Commit da transação
    $pdo->commit();

    echo 'Usuário e pet deletados com sucesso';

} catch (Exception $e) {
    // Caso ocorra algum erro, faz o rollback da transação
    $pdo->rollBack();
    echo "Erro: " . $e->getMessage();
}

// Fecha a conexão
$pdo = null;
?>
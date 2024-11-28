<?php
// Conexão com banco de dados
include_once('config.php');

try {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    // Invalida o token anterior, se houver
    $stmt = $pdo->prepare("UPDATE USUARIO SET token = NULL WHERE email = ?");
    
    if ($stmt->execute([$email])){
        // Gera um novo token aleatório
        $token = bin2hex(random_bytes(16));
        $tempoExpiracao = time() + 3600;

        // seta os valores no session
        $_SESSION['auth_token'] = $token;
        $_SESSION['token_exp'] = $tempoExpiracao;

        // Atualiza o novo token no banco de dados
        $stmt = $pdo->prepare("UPDATE USUARIO SET token = ? WHERE email = ?");
        $stmt->execute([$token, $email]);
    }
} catch (PDOException $e) {
    echo "Erro na inserção: " . $e->getMessage();
}


// Fecha a conexão
$pdo = null;
?>
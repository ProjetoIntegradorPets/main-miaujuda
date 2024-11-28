<?php
// Conexão com banco de dados
include_once('config.php');

try {
    // Recebe os inputs
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS); 
    $type = filter_input(INPUT_POST, 'type', FILTER_SANITIZE_SPECIAL_CHARS); 
    $description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_SPECIAL_CHARS); 
    $location = filter_input(INPUT_POST, 'location', FILTER_SANITIZE_SPECIAL_CHARS); 
    // %date = htmlspecialchars(trim($_POST['date'])); 
    // $image = htmlspecialchars(trim($_POST['image'])); 
    
    // =-=-=-=-=-=-=-=- ANIMAL =-=-=-=-=-=-=-=-=-=-
    // Query de inserção com prepared statement
    $queryInsert = "INSERT INTO ANIMAL (nome, descricao, FK_TIPO_id) VALUES(:name, :description, :type);";
    
    // Preparando a query 
    $stmt = $pdo->prepare($queryInsert);
    
    // Bind dos parâmetros
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':type', $type);
    $stmt->execute();

    $id_ANIMAL = $pdo->lastInsertId();

    // =-=-=-=-=-=-=-=- ENDERECO =-=-=-=-=-=-=-=-=-
    // Query de inserção com prepared statement
    $queryInsert = "INSERT INTO ENDERECO (id, cep, estado, cidade, bairro, rua, numero, complemento) VALUES
    (:id, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2');";

    // Preparando a query 
    $stmt = $pdo->prepare($queryInsert);
    
    // Bind dos parâmetros
    $stmt->bindParam(':id', $id_ANIMAL);
    $stmt->execute();

    $id_ENDERECO = $pdo->lastInsertId();
    
    // =-=-=-=-=-=-=-=- AVISTAMENTO =-=-=-=-=-=-=-=-
    // Query de inserção com prepared statement
    $queryInsert = "INSERT INTO AVISTAMENTO (fk_ANIMAL_id, fk_ENDERECO_id, data) VALUES
    (:animal, :endereco, '2023-06-04');";

    // Preparando a query 
    $stmt = $pdo->prepare($queryInsert);
    
    // Bind dos parâmetros
    $stmt->bindParam(':animal', $id_ANIMAL);
    $stmt->bindParam(':endereco', $id_ENDERECO);
    $stmt->execute();
    
    // =-=-=-=-=-=-=-=- PETS_USUARIO =-=-=-=-=-=-=-=-
    // Query de inserção com prepared statement
    $queryInsert = "INSERT INTO PETS_USUARIO (email, FK_pet_id) VALUES
    (:email, :animal);";

    // Preparando a query 
    $stmt = $pdo->prepare($queryInsert);
    
    // Bind dos parâmetros
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':animal', $id_ANIMAL);
    $stmt->execute();
    
} catch (PDOException $e) {
    echo "Erro na inserção: " . $e->getMessage();
}

// Fecha a conexão
$pdo = null;
?>

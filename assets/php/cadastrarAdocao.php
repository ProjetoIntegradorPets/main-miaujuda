<?php
// Conexão com banco de dados
include_once('config.php');
if (empty($_POST)) {
    echo "Nenhum dado foi recebido.";
    exit;
}
try {

    // Recebe os inputs
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL); 
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS); 
    $type = filter_input(INPUT_POST, 'type', FILTER_SANITIZE_SPECIAL_CHARS); 
    $gender = filter_input(INPUT_POST, 'gender', FILTER_SANITIZE_SPECIAL_CHARS); 
    $breed = filter_input(INPUT_POST, 'breed', FILTER_SANITIZE_SPECIAL_CHARS); 
    $weight = filter_input(INPUT_POST, 'weight', FILTER_SANITIZE_SPECIAL_CHARS); 
    $height = filter_input(INPUT_POST, 'height', FILTER_SANITIZE_SPECIAL_CHARS); 
    $description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_SPECIAL_CHARS); 
    // $location = htmlspecialchars(trim($_POST['location'])); 
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

    // =-=-=-=-=-=-=-=- ANIMAL_ADOCAO =-=-=-=-=-=-=-=-=-
    // Query de inserção com prepared statement
    $queryInsert = "INSERT INTO ANIMAL_ADOCAO (tamanho, peso, sexo, raca, FK_ANIMAL_id) VALUES(:height, :weight, :gender, :breed, :id);";

    // Preparando a query 
    $stmt = $pdo->prepare($queryInsert);
    
    // Bind dos parâmetros
    $stmt->bindParam(':height', $height);
    $stmt->bindParam(':weight', $weight);
    $stmt->bindParam(':gender', $gender);
    $stmt->bindParam(':breed', $breed);
    $stmt->bindParam(':id', $id_ANIMAL);
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

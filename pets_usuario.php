<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiauJuda</title>

    <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="assets/css/utils.css">

    <script type="module" src="assets/js/logged.js" defer></script>
    <script type="module" src="assets/js/pagination.js" defer></script>
    <script type="module" src="assets/js/modalCad.js" defer></script>
    <script type="module" src="assets/js/petsUsuario.js" defer></script>
</head>
<body>
    <!-- HEADER -->
    <?php include_once('assets/crud_html/header.html');?>
    <div class="container">
        
        <main>
            <section class="section-pets">
                <h2>Pets Cadastrados pelo Usuário</h2><br>
                <div class="tabs">
                    <button class="tab-button active" data-tab="todos">TODOS</button>
                    <button class="tab-button" data-tab="adoc">PETS PARA ADOÇÃO</button>
                    <button class="tab-button" data-tab="perd">PETS PERDIDOS</button>
                </div>
                <div id="petList" class="pet-list">
                    <!-- Pet cards will be dynamically inserted here -->
                </div>
                <div class="pagination">
                    <!-- Pagination buttons will be dynamically inserted here -->
                </div>
            </section>

            <section id="petDetailsModal" class="modal">
                <!-- detalhes do pet -->
            </section>

            <!-- botao de cadastrar pets -->
            <?php include_once('assets/crud_html/cadastrarPets.html')?>
        </main>
    </div>
    
    <!-- FOOTER -->
    <?php include_once('assets/crud_html/footer.html');?>
</body>
</html>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="assets/css/utils.css">
    <link rel="stylesheet" href="assets/css/perfil_usuario.css">
    <link rel="shortcut icon" href="assets/img/patasfundo.png" type="image/x-icon">
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>

    <title>Perfil Usuário</title>

    <script type="module" src="assets/js/logged.js" defer></script>
    <script type="module" src="assets/js/perfil_usuario.js" defer></script>
</head>

<body>
    <!-- HEADER -->
    <?php include_once('assets/crud_html/header.html'); ?>

    <!-- CONTAINER -->
    <section class="container">

        <!-- FUNDO -->
        <div class="background">
            <!-- NOME DE USUARIO -->
            <h1 class="user-name">NOME DE USUÁRIO</h1>
            <hr>

            <div class="blocos">
                <!-- DIV BLOCO 01 -->
                <div class="bloco1">
                    <!-- IMAGEM USUARIO -->
                    <div class="img_area">
                        <img class="img_perfil" src="https://v0.dev/placeholder.svg" alt="img_perfil">
                    </div>
                </div>

                <!-- DIV BLOCO 02 -->
                <div class="bloco2">
                    <!-- DADOS USUARIO -->

                    <!-- CONTATO -->
                    <div class="contato">
                        <h3>FORMAS DE CONTATO</h3>
                        <div class="fcontatos">
                            <b id="user-email">usuario@email.com</b>
                            <b id="user-phone">(00) 00000-0000</b>
                        </div>
                    </div>
                    <!-- LOCALIZACAO -->
                    <div class="localizacao">
                        <h3>LOCALIZAÇÃO</h3>
                        <div class="local">
                            <b id="user-location">Localização do usuário, bem aqui - Desse Jeito, 000</b>
                        </div>
                    </div>
                    <br>
                    <!-- BTN EDITAR PERFIL -->
                    <div class="btn">
                        <a href="#" class="btn_editar_perfil" id="edit-profile-btn">EDITAR PERFIL</a>
                    </div>
                </div>
            </div>
            <!-- Excluir conta -->
            <button id="usuarioDButton" class="delete-button">Excluir Conta</button>
            <!-- Logout -->
            <button id="usuarioSButton" class="logout-button">Sair</button>
            <hr>
        </div>
    </section>

    <!-- FORMULÁRIO PARA EDIÇÃO -->
    <div id="edit-profile-modal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h3>EDITAR PERFIL DE USUÁRIO</h3>
            <hr>
            <form id="edit-profile-form">
                <div class="form-group-ft">
                    <label for="userImage">Foto de Perfil:</label>
                    <div class="file-btn">
                        <input type="file" id="profile-picture" accept="image/*" style="display: none;"
                            onchange="updateFileName()">
                        <input type="button" class="userimage" value="Selecionar Imagem"
                            onclick="document.getElementById('profile-picture').click();">
                        <span id="file-name"></span>
                        <div class="btn_excluirft">
                            <button type="button" id="remove-photo" class="btn_excluir_ft">Excluir Foto</button>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" class="input" required>
                    <br>
                </div>
                <div class="form-group">
                    <label for="phone">Telefone:</label>
                    <input type="number" id="phone" class="input" required>
                </div>
                <div class="form-group">
                    <label for="location">Localização:</label>
                    <input type="text" id="location" class="input" required>
                </div>
                <hr>
                <div class="btn-save">
                    <button type="submit" class="btn_user_up">SALVAR ALTERAÇÕES</button>
                </div>

            </form>
        </div>
    </div>

    <!-- FOOTER -->
    <?php include_once('assets/crud_html/footer.html'); ?>

</body>

</html>
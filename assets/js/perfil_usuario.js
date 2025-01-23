import {fetchEmail} from './fetchEmail.js';


document.addEventListener('DOMContentLoaded', function() {

    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const closeBtn = editProfileModal.querySelector('.close-button');
    const editProfileForm = document.getElementById('edit-profile-form');
    const removePhotoBtn = document.getElementById('remove-photo');
    const deleteButton = document.getElementById('usuarioDButton');
    const logoutButton = document.getElementById('usuarioSButton');
    
        // CALL FUNCTIONS
    fetchUsuario().then(async function(data) {
        const userName = document.querySelector('.user-name');
        const userEmail = document.getElementById('user-email');
        const userTelefone = document.getElementById('user-phone');

        userName.textContent = data.nome;
        userEmail.textContent = data.email;
        userTelefone.textContent = data.telefone;
    });

    
    // ================= FUNCTIONS
    async function fetchUsuario() {
        try {
            const email = await fetchEmail();

            const formdata = new FormData()
            formdata.append('email', email)

            const response = await fetch('assets/php/perfil_usuario.php', {
                method: 'POST',
                body: formdata
            });
        
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json(); 
            return data;
        } catch (error) {
            console.error('Erro ao buscar os dados: ', error);
        }
    }

    // =============== EVENT LISTENERS
    // Deleta Conta de Usuario
    deleteButton.addEventListener('click', async () => {
        if (!confirm('DESEJA DELETAR A CONTA?')) return;

        const email = await fetchEmail();

        const formdata = new FormData()
        formdata.append('email', email)

        const response = await fetch('assets/php/deletaUsuario.php', {
            method: 'POST',
            body: formdata
        });

        if (!response.ok) {
            console.log('Erro ao excluir aconta');
            return;
        }

        window.location.href = 'index.php';
        logoutButton.click();

    });
    // Sai da conta do Usuario
    logoutButton.addEventListener('click', () => {
        const response = fetch('assets/php/sair_perfil_usuario.php');

        window.location.href = 'index.php';
    })
    // Abre o formulário
    editProfileBtn.addEventListener('click', function() {
        editProfileModal.style.display = 'block';

        // Preenche com o que já estiver presente
        document.getElementById('nome').value = document.querySelector('.user-name').textContent;

        const tel = document.getElementById('user-phone').textContent;
        // Remover todos os caracteres não numéricos
        let numeroLimpo = tel.replace(/\D/g, '');
        // Converter para número inteiro
        let numeroInt = parseInt(numeroLimpo, 10);
        document.getElementById('phone').value = numeroInt;

        document.getElementById('location').value = document.getElementById('user-location').textContent;
    });

    // Fecha o formulário
    closeBtn.addEventListener('click', function() {
        editProfileModal.style.display = 'none';
    });

    // Fecha o formulário se for clicado em algum lugar fora da área dele
    window.addEventListener('click', function(event) {
        if (event.target == editProfileModal) {
            editProfileModal.style.display = 'none';
        }
    });

    // Salva as informações
    editProfileForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = await fetchEmail();
        const formdata = new FormData();
        formdata.append('nome', document.getElementById('nome').value);
        formdata.append('tel', document.getElementById('phone').value);
        formdata.append('loc',  document.getElementById('location').value);
        formdata.append('email', email);

        const response = await fetch('assets/php/edit_perfil_usuario.php', {
            method: 'POST',
            body: formdata
        });
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Fecha o formulário
        editProfileModal.style.display = 'none';
        location.reload();
        
    });

    // Troca a imagem de perfil
    document.getElementById('profile-picture').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.querySelector('.img_perfil').src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    // Remove a imagem de perfil
    removePhotoBtn.addEventListener('click', function() {
        document.querySelector('.img_perfil').src = 'assets/img/default-profile.jpg'; // Replace with your default image path
    });
});

import {fetchEmail} from './fetchEmail.js';


document.addEventListener('DOMContentLoaded', function() {

    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const closeBtn = editProfileModal.querySelector('.close-button');
    const editProfileForm = document.getElementById('edit-profile-form');
    const removePhotoBtn = document.getElementById('remove-photo');
    
        // CALL FUNCTIONS
    fetchUsuario().then(async function(data) {
        const email = await fetchEmail();
        if (email == 'error') {
            window.location.href = 'validar.html'
        }
        
        const userName = document.querySelector('.user-name');
        const userEmail = document.getElementById('user-email');

        userEmail.textContent = email;
        userName.textContent = data.nome;
    });

    
    // ================= FUNCTIONS
    async function fetchUsuario() {
        try {
            const response = await fetch('assets/php/perfil_usuario.php', );
        
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
    // Abre o formulário
    editProfileBtn.addEventListener('click', function() {
        editProfileModal.style.display = 'block';
        // Preenche com o já estiver presente
        document.getElementById('email').value = document.getElementById('user-email').textContent;
        document.getElementById('phone').value = document.getElementById('user-phone').textContent;
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
    editProfileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        //  Atualiza as informações
        document.getElementById('user-email').textContent = document.getElementById('email').value;
        document.getElementById('user-phone').textContent = document.getElementById('phone').value;
        document.getElementById('user-location').textContent = document.getElementById('location').value;
        // Fecha o formulário
        editProfileModal.style.display = 'none';
        
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

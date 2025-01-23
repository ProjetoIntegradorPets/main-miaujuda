let login_status = false;

function getLoginStatus() {
  return login_status;
}
export { getLoginStatus };

fetch('assets/php/validarToken.php')
.then(async function(response) {
    if (response.status == 200){
      const email = await response.text();
      if (email == 'error') return;

      const user_pets = document.getElementById('user_pets');
      const user_btn = document.getElementById('user_txt');
      const tokenData = new FormData();

      tokenData.append('email', email);
      
      // gera o token e envia pro banco de dados.
      const token = await fetch('assets/php/gera_token.php', {
          method: 'POST',
          body: tokenData
      });

      if (token.status == 200){
        user_btn.textContent = 'Perfil';
        user_btn.href = 'perfil_usuario.php';
        user_pets.href = 'pets_usuario.php';
        login_status = true;
        // window.location.href = 'index.html'
      }
    }
});

export function fetchEmail(){
    return fetch('assets/php/validarToken.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Deu b.o na conexão');
        }
        const email = response.text();
        if (email == 'error') {
            window.location.href = 'validar.html'
        }
        return email;
    });
}
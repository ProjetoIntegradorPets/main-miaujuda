export function fetchEmail(){
    return fetch('assets/php/validarToken.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Deu b.o na conexão');
        }
        return response.text();
    });
}
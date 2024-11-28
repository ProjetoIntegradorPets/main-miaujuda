import {destroyError, addError} from './utils.js';

// variable to define if is signIN or signUP
let isUPorIN = 'IN';


/*----------------- SWAP Pages Config -----------------*/
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    isUPorIN = 'UP';
});
    loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    isUPorIN = 'IN';
});


/*----------------- variables -----------------*/
// variables
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const buttons = document.querySelectorAll('.btn_sub');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const uName = document.getElementById("uName");
const uEmailIN = document.getElementById("uEmailIN");
const uEmailUP = document.getElementById("uEmailUP");
const uPassIN = document.getElementById("uPassIN");
const uPassUP = document.getElementById("uPassUP");
const uCPass = document.getElementById("uCPass");


/*----------------- event listeners -----------------*/
if (uName) uName.addEventListener('input', validateName);
if (uEmailIN) uEmailIN.addEventListener('input', validateEmail);
if (uEmailUP) uEmailUP.addEventListener('input', validateEmail);
if (uPassIN) uPassIN.addEventListener('input', validatePass);
if (uPassUP) uPassUP.addEventListener('input', validatePass);
if (uCPass) uCPass.addEventListener('input', validateCPass);

/*----------------- SignUP SUBMIT FORM -----------------*/
if (signUpForm){
    // Adicionar listener ao form para capturar o submit
    signUpForm.addEventListener('submit', async function(event) {
        event.preventDefault();  // Impede o envio automático do formulário
    
        // Verifica se todos os campos estao corretos
        if (validateAll('UP') === 'error') return;
        
        // Verifica se o email existe
        const isInvalid = await email_exists();  
        if (isInvalid) {
            uEmailUP.style.border = "1px solid red";
            addError('Email já cadastrado!', uEmailUP);
            return;
        }

        // Tenta enviar dados para o banco
        try {
            const formData = new FormData();
            formData.append('email', uEmailUP.value);
            formData.append('senha', uPassUP.value);
            formData.append('nome', uName.value);
            
            // Faz a requisição AJAX para dar submit
            const result = await fetch('assets/php/efetuarCadastro.php', {
                method: 'POST',
                body: formData
            });

            // Verifica se o cadastro foi bem-sucedido
            if (result.status == 200) {

                const tokenData = new FormData();
                tokenData.append('email', uEmailUP.value);

                // gera o token e envia pro banco de dados.
                const token = await fetch('assets/php/gera_token.php', {
                    method: 'POST',
                    body: tokenData
                });
                
                // Redireciona para outra página após o cadastro
                if (token.status == 200) window.location.href = 'index.php';  
                return;
            } else {
                console.error('Erro no cadastro: ', result);
            }

        } catch (error) {
            console.error('Erro ao cadastrar usuário: ', error);
        }
    });
}

// if (buttons[1]) buttons[1].addEventListener('click', signIN);
if (signInForm){
    signInForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        if (validateAll('IN') === 'error'){
            addError('Email ou senha incorretos!', document.getElementById('btn2 sIN'));
            return;
        }

        // Tenta enviar dados para o banco
        try {
            const formData = new FormData();
            formData.append('email', uEmailIN.value);
            formData.append('senha', uPassIN.value);
            
            // Faz a requisição AJAX para dar submit
            const result = await fetch('assets/php/efetuarLogin.php', {
                method: 'POST',
                body: formData
            });
            
            // Verifica se o cadastro foi bem-sucedido
            if (result.status == 200) {

                const response = await result.text();

                if (response == 'success') {
                    const tokenData = new FormData();
                    tokenData.append('email', uEmailIN.value);

                    // gera o token e envia pro banco de dados.
                    const token = await fetch('assets/php/gera_token.php', {
                        method: 'POST',
                        body: tokenData
                    });
                    
                    // Redireciona para outra página após o cadastro
                    if (token.status == 200) window.location.href = 'index.php';  
                    return;
                }else {
                    const el = document.getElementById('btn2 sIN');
                    destroyError(el, 'input_error');
                    addError('Email ou senha incorretos!', el);
                }
                
            } else {
                console.error('Erro no cadastro: ', result);
            }

        } catch (error) {
            console.error('Erro ao cadastrar usuário: ', error);
        }
    });
}


/*----------------- validate Inputs . Erros -> functions -----------------*/
function validateName(){
    const name = uName.value;

    uName.style.border = "1px solid green";
    destroyError(uName, 'input_error');

    // verify if the name is valid
    if(name.length < 3){
        uName.style.border = "1px solid red";
        addError('Tamanho mínimo: 3 caracteres!', uName);
        return 'error';
    }

    // verify if the name is empty
    if(name === ''){
        uName.style.border = "1px solid red";
        addError('Digite um nome!', uName);
        return 'error';
    }

    return 'success';
}

function validateEmail(){
    // get the page (Sign IN or Sign UP) of the email
    const emailELEMENT = document.getElementById('uEmail' + isUPorIN);

    const email = emailELEMENT.value;   
    destroyError(emailELEMENT, 'input_error');
    
    // verify the regex of the email
    if(emailRegex.test(email)){
        emailELEMENT.style.border = "1px solid green";
    }
    else{
        emailELEMENT.style.border = "1px solid red";
        addError('Email inválido!', emailELEMENT);
        return 'error';
    }

    // verify if is empty
    if(email === ''){
        emailELEMENT.style.border = "1px solid red";
        addError('Digite um email!', emailELEMENT);
        return 'error';
    }

    return 'success';
}

function validatePass(){
    // get the page (Sign IN or Sign UP) of the password
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const passELEMENT = document.getElementById('uPass' + isUPorIN);
    const pass = passELEMENT.value;
    passELEMENT.style.border = "1px solid green";
    destroyError(passELEMENT, 'input_error');
    
    if (!regex.test(pass) && isUPorIN === 'UP') {
        passELEMENT.style.border = "1px solid red";
        addError("Senha inválida! A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.", passELEMENT);
        return 'error';
    }

    // if is empty
    if(pass === ''){
        passELEMENT.style.border = "1px solid red";
        addError('Digite uma senha!', passELEMENT);
        return 'error';
    } 

    return 'success';
}

function validateCPass(){
    const pass = uPassUP.value;
    const cPass = uCPass.value;

    uCPass.style.border = "1px solid green"
    destroyError(uCPass, 'input_error');

    if (cPass !== pass || cPass == ''){
        uCPass.style.border = "1px solid red";
        addError('Senhas não conferem!', uCPass);
        return 'error';
    } 

    return 'success';
}

/*----------------- verifica se o email existe -----------------*/
async function email_exists() {
    const email = uEmailUP.value;
    let emailExists = false;

    try {
        // Faz a requisição AJAX para verificar o email
        const response = await fetch('assets/php/validarEmail.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'email=' + encodeURIComponent(email)
        });

        const result = await response.text();
        if (result === 'exists') {
            emailExists = true;
        }
    } catch (error) {
        console.error('Erro ao validar o email:', error);
    }

    return emailExists;
}

/*----------------- submit -> functions -----------------*/
function validateAll(type) {
    const validations = [
        validateEmail(),
        validatePass()
    ];

    if (type === 'UP'){
        validations.push(validateName());
        validations.push(validateCPass());
    }
    return validations.every(result => result === 'success') 
        ? 'success' 
        : 'error';
}
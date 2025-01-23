import {getLoginStatus} from './logged.js';
import {fetchEmail} from './fetchEmail.js';

document.addEventListener('DOMContentLoaded', () => {
    // ================ Variables
    const closeButtons = document.querySelectorAll('.close-button')

    // Modal
    const cadButtons = document.querySelectorAll('.add_btns');
    const addPetModal = document.querySelectorAll('.modal');
    const addPetForm = document.querySelectorAll('#addPetForm');


    // ================ Event Listeners
    // Create pet - SUBMIT FORM
    addPetForm.forEach(e => e.addEventListener('submit', j => (handleSubmit(j))));

    // Open Modal if Logged
    cadButtons.forEach((e) => {
        e.addEventListener('click', () => {
            if (getLoginStatus()){ // login_status from logged.js
                const mod = document.getElementById(`addPetModal_${e.id}`);
                mod.style.display = 'block';
            }else{
                window.location.href = "validar.html";
            }
        });
    })

    // Close Pet Modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (addPetModal) addPetModal.forEach((e) => {
                e.style.display = 'none';
                if (e.querySelector('#addPetModal')) e.reset();
            });
        });
    });


    // ================ Functions
    async function handleSubmit(j){
        j.preventDefault();

        const formData = new FormData();
        const id_button = j.target.querySelector('button').id;
        const email = await fetchEmail();

        let formEd;
        
        if (id_button == 'cadastrarAdocao'){
            formEd = cadAdocao(formData, email);
        }else{
            formEd = cadPerdido(formData, email); 
        }

        savePet(formEd, id_button);
        window.location.reload(true);
    }

    function cadAdocao(formData, email){
        formData.append('email', email);
        formData.append('name', document.getElementById('petNameA').value);
        formData.append('type', document.getElementById('petTypeA').value);
        formData.append('gender', document.getElementById('petGenderA').value);
        formData.append('breed', document.getElementById('petBreedA').value);
        formData.append('weight', document.getElementById('petWeightA').value);
        formData.append('height', document.getElementById('petHeightA').value);
        formData.append('description', document.getElementById('petDescriptionA').value);
        // formData.append('image', document.getElementById('petImage').files[0]); 

        return formData;
    }

    function cadPerdido(formData, email){
        formData.append('email', email);
        formData.append('name', document.getElementById('petNameP').value);
        formData.append('type', document.getElementById('petTypeP').value);
        formData.append('gender', document.getElementById('petGenderP').value);
        formData.append('description', document.getElementById('petDescriptionP').value);
        formData.append('location', document.getElementById('petLocationP').value);
        // formData.append('image', document.getElementById('petImage').files[0]);      

        return formData;
    }

    function savePet(obj, file) {
        // Faz a requisição AJAX
        try {
            fetch(`assets/php/${file}.php`, {
                method: 'POST',
                body: obj
            });
        } catch (error) {
            console.log("Erro na requisção AJAX: ", error);
        }
    }

    // ADD button
    function closeOnClickOutside(event) {
        var addButton = document.getElementById("addButton-content");
        
        if (!addButton.contains(event.target) && !event.target.matches('.addButton-btn')) {
        addButton.classList.remove('show');
        
        document.removeEventListener('click', closeOnClickOutside);
        }
    }
    
    function toggleAddButton() {
        var addButton = document.getElementById("addButton-content");
        if (addButton.classList.contains('show')) {
        addButton.classList.remove('show');
        } else {
        addButton.classList.add('show');
        }
        document.addEventListener('click', closeOnClickOutside);
    }
    window.toggleAddButton = toggleAddButton;
});
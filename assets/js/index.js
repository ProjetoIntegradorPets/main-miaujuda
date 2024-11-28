import {getPetList, fetchPets} from './fetchPets.js';
import { addPetList } from './pagination.js';

document.addEventListener('DOMContentLoaded', () => {
    // ================ Variables
    let pets = createPetList();
    const closeButtons = document.querySelectorAll('.close-button')

    const petDetailsModal = document.getElementById('petDetailsModal');
    const petDetailsName = document.getElementById('petDetailsName');
    const petDetailsImage = document.getElementById('petDetailsImage');
    const petDetailsDesc = document.getElementById('petDetailsDesc');
    const petDetailsType = document.getElementById('petDetailsType');
    const deletePetButton = document.querySelector('.delete-button');

    // ================ Event Listeners
    // Close Pet Details
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            petDetailsModal.style.display = 'none';
        });
    });

    
    // ================ Functions
    function showPetDetails(pet) {
        // display informations
        petDetailsName.textContent = pet.nome;
        // petDetailsImage.src = pet.image;
        petDetailsImage.src = 'https://v0.dev/placeholder.svg';
        petDetailsImage.alt = pet.nome;
        petDetailsDesc.textContent = `Descricao: ${pet.descricao}`;
        petDetailsType.textContent = `Tipo: ${pet.categoria === 'Cachorro' ? 'Cão' : 'Gato'}`;
        petDetailsModal.style.display = 'block';

        // Delete pet
        deletePetButton.onclick = () => {
            if (confirm('Tem certeza que deseja excluir este pet?')) {
                pets = pets.filter(p => p.id !== pet.id);
                savePetsToLocalStorage();
                renderPets();
                petDetailsModal.style.display = 'none';
            }
        };
    }

    async function createPetList() {
        await fetchPets('animalAdocaoRequest'); 
        const petList = getPetList();
        addPetList(petList);
    }

    // ================ Call functions

});

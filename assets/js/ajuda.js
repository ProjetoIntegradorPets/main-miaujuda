import {getPetList, fetchPets} from './fetchPets.js';
import { addPetList } from './pagination.js';

document.addEventListener('DOMContentLoaded', () => {
    // ================ Variables
    let pets = createPetList();

    const helpButton = document.querySelector('.help-button');
    const helpModal = document.getElementById('helpModal');
    const closeButtons = document.querySelectorAll('.close-button')

    // Display Blocks
    if(helpButton) helpButton.addEventListener('click', () => {
        helpModal.style.display = 'block';
    });

    // Close Help Modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(helpModal) helpModal.style.display = 'none'; 
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
        await fetchPets('animalPerdidoRequest'); 
        const petList = getPetList();
        addPetList(petList);
    }
});
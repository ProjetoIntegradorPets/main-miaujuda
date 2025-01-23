import {getPetList, fetchPets} from './fetchPets.js';
import { addPetList } from './pagination.js';

document.addEventListener('DOMContentLoaded', () => {
    // ================ Variables
    let pets = createPetList();
    const closeButtons = document.querySelectorAll('.close-button')

    const petDetailsModal = document.getElementById('petDetailsModal');

    // ================ Event Listeners
    // Close Pet Details
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            petDetailsModal.style.display = 'none';
        });
    });

    async function createPetList() {
        await fetchPets('animalAdocaoRequest'); 
        const petList = getPetList();
        addPetList(petList);
    }

    // ================ Call functions

});

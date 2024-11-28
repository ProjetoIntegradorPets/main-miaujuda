import {getPetList, fetchPets} from './fetchPets.js';
import { addPetList } from './pagination.js';
import {fetchEmail} from './fetchEmail.js';

document.addEventListener('DOMContentLoaded', () => {
    // ================ Variables
    createPetList();

    // ================ Functions
    async function createPetList() {
        const email = await fetchEmail();
        if (email !== 'error'){
            await fetchPets('animalUsuarioRequest', email); 
    
            const petList = getPetList();
            addPetList(petList, 1);
        }
        else{
            window.location.href = 'validar.html'
;        }
    }
});
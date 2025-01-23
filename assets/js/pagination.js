import { fetchEmail } from "./fetchEmail.js";

// ================ Variables
const petList = document.getElementById('petList');
const tabButtons = document.querySelectorAll('.tab-button');
const detailElement = document.getElementById('petDetailsModal');
const petsPerPage = 8;
let currentPage = 1;
let currentFilter = 'todos';
let pets_list = [];
let tipo_filtro = 0;
let owner = 0


// ================ Event Listeners
// TabButtons switch
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.tab;
        currentPage = 1;
        renderPets();
    });
});


// ================ Functions
function renderPets(){
    petList.innerHTML = '';

    // Slice petList for Render
    const startIndex = (currentPage - 1) * petsPerPage;
    const endIndex = startIndex + petsPerPage;

    const filteredPets = pets_list.filter(pet => currentFilter === 'todos' || 
                                            (currentFilter === 'caes' && pet.categoria === 'Cachorro' && tipo_filtro === 0) || 
                                            (currentFilter === 'gatos' && pet.categoria === 'Gato' && tipo_filtro === 0)|| 
                                            (currentFilter === 'adoc' && pet.raca !== null && tipo_filtro === 1) || 
                                            (currentFilter === 'perd' && pet.raca === null && tipo_filtro === 1));
    const petsToShow = filteredPets.slice(startIndex, endIndex);
    // Create petsToShow list
    petsToShow.forEach((pet, index) => {

        // ESSE BLOCO PRECISA MUDAR NAS TELAS INDEX E AJUDA
        // Como? eu não faço ideia.
        const petCard = document.createElement('div');

        petCard.className = 'pet-card';
        petCard.innerHTML = `
            <img src="https://v0.dev/placeholder.svg" alt="${pet.nome}">
            <div class="pet-info">
                <h3>${pet.nome}</h3>
                <p>${pet.descricao}</p>
            </div>
        `;
        petCard.setAttribute('data-index', index);

        petCard.addEventListener('click', () => showPetDetails(pet));
        petList.appendChild(petCard);
    });

    // Update the number of pages
    updatePagination(filteredPets.length);
}

function updatePagination(totalPets) {
    // Get elements
    const totalPages = Math.ceil(totalPets / petsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    // Create pageButons (1  2  3 >)
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');

        pageButton.className = `page-button ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;

        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderPets();
        });

        paginationContainer.appendChild(pageButton);
    }

    // ADD Arrow ( > )
    if (totalPages > 1) {
        const nextButton = document.createElement('button');

        nextButton.className = 'page-button';
        nextButton.textContent = '>';

        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPets();
            }
        });

        paginationContainer.appendChild(nextButton);
    }
}

function showPetDetails(pet) {
    // criando modal
    const modal = document.createElement('div');
    modal.className = 'modal-content';

    // Configurando elementos
    const el = `<span class="close-button">&times;</span>
                <h2 id="petDetailsName">${pet.nome}</h2>
                <hr>
                <img id="petDetailsImage" src="https://v0.dev/placeholder.svg" alt="Pet Image" class="pet-details-image">
                <div class="inf-pet">
                    <p>-Informações do pet-</p>
                </div>
                <p id='nome_doador'>Doador: Cleiton da Silva</p>
                <p>Localização: Brasil</p>`;

    let el2 = '';
    if (pet.raca !== null){
        const sexo = pet.sexo == 'M' ? 'Macho' : 'Fêmea';
        el2 = `<hr>
        <p>Tamanho: ${pet.tamanho} cm</p>
        <p>Peso: ${parseFloat(pet.peso)} kg</p>
        <p>Raça: ${pet.raca}</p>
        <p>Sexo: ${sexo}</p>`;
    }

    const el3 =`<hr>
                <p id="petDetailsType">Tipo: ${pet.categoria}</p>
                <p id="petDetailsDesc">Descrição: ${pet.descricao}</p>`;
            
                
    modal.innerHTML += el;
    modal.innerHTML += el3;
    modal.innerHTML += el2;

    if (owner) {
        modal.innerHTML += '<button id="petButton" class="delete-button">Excluir Pet</button>';
    }
                
    detailElement.appendChild(modal);
    detailElement.style.display = 'block';

    if (pet.nome_usuario) document.getElementById('nome_doador').textContent = 'Doador: '+pet.nome_usuario;
    
    
    const closeButtons = document.querySelectorAll('.close-button');
    const idx = closeButtons.length > 3 ? 1 : 0;
    const closeButton = closeButtons[idx];
    closeButton.addEventListener('click', () => {
        detailElement.removeChild(detailElement.firstChild);
        detailElement.innerHTML = '';
        detailElement.style.display = 'none';
    });

    const petButtons = document.querySelectorAll('#petButton');
    
    if (petButtons.length > 0) {
        const deleteButton = petButtons[0];
        // Delete pet
        deleteButton.addEventListener('click', async () => {
            if (confirm('Tem certeza que deseja excluir este pet?')) {
                const formdata = new FormData();
                const email = fetchEmail();
                formdata.append('email', email);
                formdata.append('id', pet.id);

                const response = await fetch('assets/php/apagar_perfil_pet.php', {
                    method: 'POST',
                    body: formdata
                });
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }
                location.reload();
            }
        });

    }
    

}

function addPetList(pets, tFiltro = 0, own = 0){
    pets_list = pets;
    tipo_filtro = tFiltro;
    owner = own;
    renderPets();
}

export {addPetList};
// ================ Variables
const petList = document.getElementById('petList');
const tabButtons = document.querySelectorAll('.tab-button');
const detailElement = document.getElementById('petDetailsModal');
const petsPerPage = 8;
let currentPage = 1;
let currentFilter = 'todos';
let pets_list = [];
let tipo_filtro = 0;


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
                <p>Nome do doador</p>
                <p>Localização</p>`;

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
                <p id="petDetailsDesc">Descrição: ${pet.descricao}</p>
                <p id="petDetailsType">Tipo: ${pet.categoria}</p>
                <button id="petButton" class="adotar-button">Adotar Pet</button>
                <button id="petButton" class="delete-button">Excluir Pet</button>`;
    
    modal.innerHTML += el;
    modal.innerHTML += el2;
    modal.innerHTML += el3;

    detailElement.appendChild(modal);
    const closeButtons = document.querySelectorAll('.close-button')
    
    // Close petDetails
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            detailElement.removeChild(detailElement.firstChild);
            detailElement.innerHTML = '';
            detailElement.style.display = 'none';
        });
    });
        
    detailElement.style.display = 'block';

    // // Delete pet
    // deletePetButton.onclick = () => {
    //     if (confirm('Tem certeza que deseja excluir este pet?')) {
    //         pets = pets.filter(p => p.id !== pet.id);
    //         savePetsToLocalStorage();
    //         renderPets();
    //         petDetailsModal.style.display = 'none';
    //     }
    // };
}

function addPetList(pets, tFiltro = 0){
    pets_list = pets;
    tipo_filtro = tFiltro
    renderPets();
}

export {addPetList};
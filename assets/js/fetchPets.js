let pets = [];

async function fetchPets(text, email='') {
    try {
        let formData = new FormData();
        if (email !== '') {
            formData.append('email', email);
        }
        const response = await fetch(`assets/php/${text}.php`, {
            method: 'POST',
            body: formData
        });

        
        if (!response.ok) {
            throw new Error('Network response deu merda');
        }

        const data = await response.json();
        pets = data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
window.fetchPets = fetchPets;

function getPetList() {
    return pets;
}
export { getPetList, fetchPets};
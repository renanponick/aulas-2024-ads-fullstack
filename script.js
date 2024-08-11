
// Manipulação de DOM e eventos

// Adiciona item à lista não ordenada
document.getElementById('add-item').addEventListener('click', () => {
    const ul = document.getElementById('my-list');
    const newItem = document.createElement('li');
    newItem.textContent = 'Novo Item';
    ul.appendChild(newItem);
});

// Muda a imagem ao clicar no botão
document.getElementById('change-image').addEventListener('click', () => {
    const img = document.getElementById('dynamic-image');
    img.src = 'https://via.placeholder.com/800x600';
    img.alt = 'Imagem Atualizada';
});

// Valida o formulário ao enviar
document.getElementById('simple-form').addEventListener('submit', (event) => {
    const nome = document.getElementById('nome').value;
    if (!nome) {
        alert('Por favor, preencha o campo Nome.');
        event.preventDefault(); // Previne o envio do formulário
    }
});

// Exemplo de evento mouseover
document.querySelector('h1').addEventListener('mouseover', () => {
    document.querySelector('h1').style.color = 'red';
});

// Exemplo de evento keydown
document.addEventListener('keydown', (event) => {
    console.log(`Tecla pressionada: ${event.key}`);
});
const axios = require('axios');

// Функция для запроса фактов о кошках
async function getCatFact() {
    try {
        const response = await axios.get('https://catfact.ninja/fact');
        document.getElementById('output').innerHTML += `<p>Cat Fact: ${response.data.fact}</p>`;
    } catch (error) {
        console.error('Error fetching cat fact:', error);
    }
}

// Функция для определения национальности по имени
async function getNationality(name) {
    try {
        const response = await axios.get(`https://api.nationalize.io/?name=${name}`);
        document.getElementById('output').innerHTML += `<p>Nationality for ${name}: ${response.data.country[0].country_id}</p>`;
    } catch (error) {
        console.error('Error fetching nationality:', error);
    }
}

// Функция для получения случайного изображения собаки
async function getRandomDogImage() {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        document.getElementById('output').innerHTML += `<p>Random Dog Image: <img src="${response.data.message}" alt="Random Dog"></p>`;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
}

// Функция для обработки кнопки "Определить национальность"
async function fetchNationality() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        getNationality(name);
    } else {
        alert('Пожалуйста, введите имя.');
    }
}

// Вызов функций
getCatFact();
getRandomDogImage();
// Функция для запроса фактов о кошках
async function getCatFact() {
    try {
        const response = await axios.get('https://catfact.ninja/fact');
        document.getElementById('catFactText').textContent = response.data.fact;
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
        document.getElementById('dogImageElement').src = response.data.message;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
}

// Функция для получения информации о игре из RAWG API
async function getGameInfo() {
    const gameName = document.getElementById('gameInput').value;
    if (!gameName) {
        alert('Пожалуйста, введите название игры.');
        return;
    }
    try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=4e56a5906c7d4a2eb536b12a154ac416&search=${gameName}`);
        document.getElementById('gameInfoText').textContent = JSON.stringify(response.data, null, 2);
    } catch (error) {
        console.error('Error fetching game info:', error);
    }
}

// Функция для получения новостной статьи из The Guardian API
async function getNewsArticle() {
    try {
        const response = await axios.get('https://content.guardianapis.com/search?api-key=a26e6b95-1c73-44f7-89b2-0bbafe86a0e6');
        document.getElementById('newsArticleText').textContent = JSON.stringify(response.data.response.results[0].webTitle, null, 2);
    } catch (error) {
        console.error('Error fetching news article:', error);
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
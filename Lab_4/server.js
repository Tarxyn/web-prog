const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Указываем папку с статическими файлами
app.use(express.static(path.join(__dirname, 'public')));

// Обрабатываем корневой маршрут

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.get('/task2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index-v-for_Familiya_I_O.html'));
});

app.get('/task3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index-watches_Familiya_I_O.html'));
});

app.get('/task1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index-hooks_Familiya_I_O.html'));
});


// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
const express = require('express');
const path = require('path');
const app = express();

// Подключение маршрутов
const itemsRoutes = require('./routes/itemsRoutes');

// Middleware для обработки JSON
app.use(express.json());

// Раздача статических файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Подключение маршрутов API
app.use('/api', itemsRoutes);

// Обработка корневого пути (если нужно отдавать index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Обработка ошибки 404 (если маршрут не найден)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Запуск сервера
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
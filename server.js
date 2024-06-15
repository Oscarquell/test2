const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3333;
const newsData = [
    {
        id: 1,
        image: `http://localhost:${PORT}/assets/image 37.png`,
        text: 'На пересечении улиц Ахунбаева / Советская установлен знак 14.1 Имеется спорная точка зрения, гласящая примерно следующее: сторонники тоталитаризма в науке, вне зависимости от их уровня, должны быть обнародованы. Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии, превозмогая сложившуюся непростую.'
    },
    {
        id: 2,
        image: `http://localhost:${PORT}/assets/image 38.png`,
        text: 'На пересечении улиц Ахунбаева / Советская установлен знак 14.1 Имеется спорная точка зрения, гласящая примерно следующее: сторонники тоталитаризма в науке, вне зависимости от их уровня, должны быть обнародованы. Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии, превозмогая сложившуюся непростую.'
    },
    {
        id: 3,
        image: `http://localhost:${PORT}/assets/image 39.png`,
        text: 'На пересечении улиц Ахунбаева / Советская установлен знак 14.1 Имеется спорная точка зрения, гласящая примерно следующее: сторонники тоталитаризма в науке, вне зависимости от их уровня, должны быть обнародованы. Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии, превозмогая сложившуюся непростую.'
    },
];

const botToken = '6761213369:AAHxksh-NRtXTr7JGhPKSr-wmzTB4Dc4HSA'; // Замените на ваш токен
const bot = new TelegramBot(botToken, { polling: true });

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/news', (req, res) => {
    res.status(200).json(newsData);
});

app.post('/send-message', (req, res) => {
    const {message} = req.body;
    bot.sendMessage('917035692', message); // artemchubur
    res.status(200).json({ success: true, message: 'Сообщение успешно отправлено.' });
});


app.use('/assets', express.static('assets'));
app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}.`);
});
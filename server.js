const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const newsData = require('./constants/news')
const testData = require('./constants/test')

const PORT = 3333;
const botToken = '6761213369:AAHxksh-NRtXTr7JGhPKSr-wmzTB4Dc4HSA';
const bot = new TelegramBot(botToken, { polling: true });

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/news', (req, res) => {
    res.status(200).json(newsData);
});

app.get('/test', (req, res) => {
    res.status(200).json(testData);
});

app.get('/test/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const testDataItem = testData.questions.find(item => item.id === id);
    if (testDataItem) {
        res.status(200).json(testDataItem);
    } else {
        res.status(400).send('Тест с указанным ID не найден.');
    }
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
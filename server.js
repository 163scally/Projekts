const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname)); 
app.use(bodyParser.urlencoded({ extended: true }));

let bookings = []; 

app.post('/book', (req, res) => {
    const { name, date } = req.body;
    if (!name || !date) return res.send("Aizpildiet visus laukus!"); 
    
    bookings.push({ id: Date.now(), name, date });
    res.send("<h1>Tu esi reģistrēts!</h1><a href='/'>Atpakaļ</a>");
});

// 2. Чтение записей (Read)
app.get('/admin', (req, res) => {
    let list = bookings.map(b => `<li>${b.name} — ${b.date}</li>`).join('');
    res.send(`<h1>Ekskursiju saraksts</h1><ul>${list}</ul><a href='/'>Atpakaļ</a>`);
});

app.listen(PORT, () => console.log(`Сервер запущен: http://localhost:3000`));
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('forms');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.render('result', { name });
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});

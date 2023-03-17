import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

app.engine('handlebars', engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

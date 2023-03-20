// https://www.youtube.com/watch?v=JbrqxPcuYVc&list=PLurIMwd6GdCi3ssXNAcjZ2l5mYaTfYPhf&index=6

// Start server with: nodemon server.js

import express from 'express';
// import { engine } from 'express-handlebars';
import handlebars from 'express-handlebars';
//import path from 'path';

const app = express();
const port = 3000;

app.use(express.static('public'));

const hbs = handlebars.create({
    defaultLayout: 'main',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
    extname: '.hbs',
    helpers: {
        addTen: function(value: number) {
            return value + 10;
        }
    }
});

app.engine('.hbs', hbs.engine);
//     engine({
//     // defaultLayout: 'main',
//     // layoutsDir: 'views/layouts',
//     // partialsDir: 'views/partials',
//     // extname: '.hbs' //change extention from .handlebars to .hbs
// }));
app.set('view engine', '.hbs');

// Routing
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        fullName: 'Miklós Milosevits',
        name: 'Miki',
        showFullName: false,
        age: 32,
        showAge: true,
        havePen: false,
        people: [
            'Andi',
            'Szandi',
            'Sanyi',
            'Lora'
        ],
        family: {
            mom: 'Erika',
            dad: 'Sanyi',
            son1: 'Tomi',
            son2: 'Zsolti'
        },
        lists: [
            {
                list: [1, 2, 3, 4, 5]
            },
            {
                list: ['a', 'b', 'c', 'd', 'e']
            }
        ],
        test: '<p>TESTING</p>',
        author: {
            firstName: 'John',
            lastName: 'Doe',
            car: {
                make: 'Ford',
                model: 'Sierra'
            }
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

"use strict";
// https://www.youtube.com/watch?v=JbrqxPcuYVc&list=PLurIMwd6GdCi3ssXNAcjZ2l5mYaTfYPhf&index=6
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Start server with: nodemon server.js
const express_1 = __importDefault(require("express"));
// import { engine } from 'express-handlebars';
const express_handlebars_1 = __importDefault(require("express-handlebars"));
//import path from 'path';
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static('public'));
const hbs = express_handlebars_1.default.create({
    defaultLayout: 'main',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
    extname: '.hbs',
    helpers: {
        addTen: function (value) {
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

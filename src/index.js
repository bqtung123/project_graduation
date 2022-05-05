const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
const db = require('./config/db');

// Connect to db
db.connect();

//template engine
const hbs = handlebars.create({
    extname: '.hbs',
    helpers: {
        image: (a) => {
            if (a == 'Tripadvisor.com')
                return ' <img src="https://play-lh.googleusercontent.com/SOHKWI6RznrRqWVUSb6THa2bJNQPvjOTLsd4CSad_GCahf2fe2p4vE8FOKjtuudmL6E=s180-rw" alt="Course Item">';
            if (a == 'Booking.com')
                return ' <img src="https://play-lh.googleusercontent.com/eJuvWSnbPwEWAQCYwl8i9nPJXRzTv94JSYGGrKIu0qeuG_5wgYtb982-2F_jOGtIytY=s180-rw" alt="Course Item">';
            if (a == 'Chudu24.com')
                return ' <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/98/b0/8f/98b08f25-f96d-4847-f023-20b682781e83/source/512x512bb.jpg" alt="Course Item">';
        },
        compare: (a, b) => {
            if (a !== b) return '<a href="?page=' + b + '">' + b + '</a>';
        },
        compareTo: (a, b) => {
            if (a !== b) return '<a onclick="getURL(' + b + ');">' + b + '</a>';
        },
        display3DotsPrevious: (a, b) => {
            if (a !== b - 1 && a !== b) return '...';
        },
        display3DotsLast: (a, b) => {
            if (a !== b + 1 && a !== b) return '...';
        },
        warn: (a, b) => {
            return a.find((e) => e.param === b) ? 'invalid' : '';
        },
    },
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// template engine

route(app);

app.listen(3000);

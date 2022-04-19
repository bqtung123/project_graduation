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
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(3000);

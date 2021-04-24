const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:  'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));

// Global Variables

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
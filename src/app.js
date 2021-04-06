const path = require('path');
const express = require('express');
const morgan = require('morgan');
const moongose = require('mongoose');

const app = express();

//conect bd
moongose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('conectada'))
    .catch(err => console.log(err));

//import rutas
const indexRoutes = require('./routes/index');


//config
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//mid
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', indexRoutes);

//iniciar
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
});
const path = require('path')
const express = require('express');
const exphbs  = require('express-handlebars');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDb = require('./config/db')
dotenv.config({path: './config/config.env'});

connectDb()
const app = express();

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

//handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

const authRoute = require('./routes/admin');
const indexRoute = require('./routes/index');

app.use(authRoute, indexRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));
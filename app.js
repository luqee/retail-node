const express = require('express');
const app = express();

const authRoute = require('./routes/admin');

app.use(authRoute);

app.listen(8080, () => console.log('Server up and running'));
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const homeRoutes = require('./routes/homeRoutes');

app.use(express.static('public'));
app.use('/', homeRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
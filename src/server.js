const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();

app.use(routes);
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.listen(3000);
    console.log('SERVDOR RODANDO NA PORTA 3000')
// librerias nodejs
const express       = require('express');
const bodyParser    = require('body-parser');
const http          = require('http');
const cors          = require('cors');
const path          = require('path');
const mongoose      = require('./database/mongoose');
const app           = express();
const db            = mongoose();

// archivo de rutas del API
const auth  = require('./server/routes/auth.route');
const user  = require('./server/routes/user.route');
const session = require('./server/routes/session.route');
const weighing = require('./server/routes/weighing.route');

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// usar ruta principal de la API-NODEJS
app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/session', session);
app.use('/api/weighing', weighing);

app.get('*', (req, res, next)=>{
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Accept', 'application/json');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','GET,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendfile(path.join(__dirname, 'dist/index.html'));
    next();
});

// Seteando PUERTO
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Ejecutandose en localhost:${port}`));
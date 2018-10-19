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

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// usar ruta principal de la API-NODEJS
app.use('/api/auth', auth);

app.get('*', (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.sendfile(path.join(__dirname, 'dist/index.html'));
});
// Seteando PUERTO
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Ejecutandose en localhost:${port}`));
import express from 'express';
import path from 'path';
import usuarios from './assets/js/usuarios.js';
import validarUsuario from './assets/js/validacion.js';

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.use(express.static('assets'));


app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.get('/abracadabra/usuarios', (req, res) => {
    res.json({usuarios});
    }
);

app.get('/abracadabra/juego/:usuario', validarUsuario, (req, res) => {
    res.sendFile(__dirname + '/index.html');
    }   
);

app.get('/abracadabra/conejo/:n', (req, res) => {
    const numRandom = Math.floor(Math.random() * 4) + 1;
    console.log(numRandom);
    const num = parseInt(req.params.n);

    if (num === numRandom) {
        res.sendFile(__dirname + '/assets/img/conejito.jpg');
    } else {
        res.sendFile(__dirname + '/assets/img/voldemort.jpg');
    }
});

app.get('*', (req, res) => {
    res.status(404).send(`<h2>Error 404</h2><p>Página no encontrada</p>`);   
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


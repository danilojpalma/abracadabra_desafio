import usuarios from './usuarios.js';
import path from 'path';

const __dirname = path.resolve();

const validarUsuario = (req, res, next) => {
    const { usuario } = req.params;
    
    const usuarioParametro = usuario.toLowerCase();
    const usuarioExiste = usuarios.map(usuario => usuario.toLowerCase()).includes(usuarioParametro);

    if (usuarioExiste) {
        next();
    } else {
        res.sendFile(__dirname + '/assets/img/who.jpeg');
    }
};

export default validarUsuario;
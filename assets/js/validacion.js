import usuarios from './usuarios.js';
import path from 'path';

const __dirname = path.resolve();

// Middleware para validar el usuario
const validarUsuario = (req, res, next) => {
    const { usuario } = req.params;
    // Convertir el parámetro de la URL a minúsculas
    const usuarioParametro = usuario.toLowerCase();

    // Convertir todos los elementos del arreglo a minúsculas y verificar si el usuario existe
    const usuarioExiste = usuarios.map(usuario => usuario.toLowerCase()).includes(usuarioParametro);

    if (usuarioExiste) {
        next(); // Si el usuario existe, continua con el siguiente middleware o ruta
    } else {
        // Si el usuario no existe, envía la imagen "who.jpeg"
        res.sendFile(__dirname + '/assets/img/who.jpeg');
    }
};

export default validarUsuario;
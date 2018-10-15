const jwt = require('jsonwebtoken');

let Autentificar = (req, res, next) => {
    let tokenRecibido = req.get('Authorization');
    jwt.verify(tokenRecibido, 'ClaveSecreta', (err, decoded) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        req.usuario = decoded.usuario;
        console.log(decoded);
    })
    next();
}

let AutentificarAdmin = (req, res, next) => {
    if (req.usuario.nombre = !'Administrator') {
        return res.status(400).json({
            ok: false,
            err: 'Esta tarea solo puede hacerla el administrador'
        })
    }
}

module.exports = { Autentificar, AutentificarAdmin }
const Usuario = require('./../models/usuario');
const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const { Autentificar, AutentificarAdmin } = require('./../middlewares/Autentificar');


app.get('/api/usuarios', Autentificar, function(req, res) {
    res.status(200).json({
        ok: true
    })
})


//Creacion de un nuevo usuario
app.post('/api/usuarios/nuevo', (req, res) => {
    let body = req.body;
    if ((!body.nombre) || (!body.clave)) {
        return res.status(400).json({
            ok: false,
            err: 'Nombre y clave requeridos'
        })
    }
    let usuario = new Usuario({
        nombre: body.nombre,
        clave: bcrypt.hashSync(body.clave, 10)
    })
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.status(200).json(usuarioDB);
    })
})

//Login
app.post('/api/usuarios/login', (req, res) => {
    let body = req.body;
    if ((!body.nombre) || (!body.clave)) { //Aseguramos que esté el usuario y la clave en el body
        return res.status(400).json({
            ok: false,
            err: 'Nombre y clave requeridos'
        })
    }
    Usuario.findOne({ nombre: body.nombre }, (err, usuarioDB) => {
        if (err) { //Error al leer en la base de datos
            return res.status(400).json({
                ok: false,
                err
            })
        }
        if (!usuarioDB) { //Usuario no existe
            return res.status(400).json({
                ok: false,
                err: 'Usuario no existe'
            })
        }
        if (!(bcrypt.compareSync(body.clave, usuarioDB.clave))) {
            return res.status(400).json({ //Contraseña incorrecta
                ok: false,
                err: 'Clave incorrecta'
            })
        }
        // Creamos el token y lo devolvemos
        let token = jwt.sign({
            usuario: usuarioDB
        }, 'ClaveSecreta', { expiresIn: 3600 * 24 * 30 });
        res.status(200).json({
            usuario: usuarioDB,
            token
        })
    })
})

module.exports = app;
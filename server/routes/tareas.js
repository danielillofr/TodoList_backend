const Tarea = require('./../models/tareas');
const express = require('express');
const app = express();
const _ = require('underscore');
const { Autentificar } = require('./../middlewares/Autentificar');
const { Enviar_mensajes_a_todos } = require('./../sockets/sockets')

app.get('/api/tareas', Autentificar, (req, res) => {
    Tarea.find({}, (err, tareas) => {
        if (err) {
            return res.status(200).json({
                ok: false,
                errBaseDatos: true,
                err
            });
        }
        res.json({
            ok: true,
            tareas
        })
    });
})

app.put('/api/tareas/:id', Autentificar, (req, res) => {
    body = req.body;
    body = _.pick(body, ['textoTarea', 'realizada']);
    Tarea.findByIdAndUpdate(req.params.id, body, { new: true }, (err, tareaDB) => {
        if (err) {
            return res.status(200).json({
                ok: false,
                errBaseDatos: true,
                err
            });
        }
        if (!tareaDB) {
            return res.status(200).json({
                ok: false,
                errBaseDatos: false,
                err: 'Usuario no encontrado'
            });
        }
        res.json({
            ok: true,
            tarea: tareaDB
        })
    })
})

app.post('/api/tareas', Autentificar, (req, res) => {
    body = req.body;
    if (!body.textoTarea) {
        return res.json({
            ok: false,
            errBaseDatos: false,
            err: 'Texto de la tarea requerido'
        })
    }

    const tarea = new Tarea({
        textoTarea: body.textoTarea,
        realizada: body.realizada
    });
    tarea.save((err, tareaDB) => {
        if (err) {
            return res.status(200).json({
                ok: false,
                errBaseDatos: true,
                err
            })
        }
        res.json({
            ok: true,
            tarea: tareaDB
        })
        console.log('Llamamos a enviar');
        Enviar_mensajes_a_todos();
    })

})

app.delete('/api/tareas/:id', Autentificar, (req, res) => {
    Tarea.findByIdAndRemove(req.params.id, (err, tareaDB) => {
        if (err) {
            return res.status(200).json({
                ok: false,
                errBaseDatos: true,
                err
            })
        }
        if (!tareaDB) {
            return res.status(200).json({
                ok: false,
                errBaseDatos: false,
                err: 'Tarea no encontrada'
            })
        }
        res.json({
            ok: true,
            tarea: tareaDB
        })
    })
})

module.exports = app;
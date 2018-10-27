const { io } = require('./../server');
const Tarea = require('./../models/tareas');

console.log('Fichero sockettt');

io.on('connection', (client) => {
    console.log('Cliente conectado');
    /*    client.emit('messageA', { nombre: 'Antonio' });
        client.emit('messageB', { nombre: 'Pepito' });
        client.on('Mensaje', (datos, callback) => {
            console.log('Datos recibido', datos);
            callback({ apellido: 'Fernandez' });
            io.emit('Mensaje2', { direccion: 'Calle Mahler' });
        })*/
    client.on('Sol_mensajes', (datos) => {
        Tarea.find({}, (err, tareas) => {
            let tareasEnviar = [];
            if (!err) {
                tareasEnviar = tareas;
            }
            client.emit('Mensajes', tareasEnviar);
        })
    })
    client.on('Eli_mensaje', (datos, callback) => {
        console.log('Recibido eliminar usuario:', datos._id);
        Tarea.findByIdAndRemove(datos._id, (err, tareaDB) => {
            console.log(err);
            if (err) {
                callback({
                    ok: false,
                    err
                })
            } else {
                callback({
                    ok: true
                });
                Enviar_mensajes_a_todos();
            }
        })
    })
    client.on('Rea_mensaje', (datos) => {
        Tarea.findByIdAndUpdate(datos._id, { realizada: true }, { new: true }, (err, tareaDB) => {
            Enviar_mensajes_a_todos();

        })
    })
    client.on('Cre_mensaje', (datos, callback) => {
        let body = datos;
        if (!body.textoTarea) {
            return callback({
                ok: false,
                errBaseDatos: false,
                err: 'Texto de la tarea requerido'
            });
        }

        const tarea = new Tarea({
            textoTarea: body.textoTarea,
            realizada: body.realizada
        });
        tarea.save((err, tareaDB) => {
            if (err) {
                return callback({
                    ok: false,
                    errBaseDatos: true,
                    err
                })
            }
            callback({
                ok: true,
                tarea: tareaDB
            })
            console.log('Llamamos a enviar');
            Enviar_mensajes_a_todos();
        })
    })
})

const Enviar_mensajes_a_todos = () => {
    console.log('Y aqui estamos');
    Tarea.find({}, (err, tareas) => {
        let tareasEnviar = [];
        if (!err) {
            tareasEnviar = tareas;
        }
        console.log('Mensajes::', tareasEnviar);
        io.emit('Mensajes', tareasEnviar);
    })
}

module.exports = { Enviar_mensajes_a_todos }
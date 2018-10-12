const { io } = require('./../server');

console.log('Fichero sockettt');

io.on('connection', (client) => {
    console.log('Cliente conectado');
    client.emit('messageA', { nombre: 'Antonio' });
    client.emit('messageB', { nombre: 'Pepito' });
    client.on('Mensaje', (datos, callback) => {
        console.log('Datos recibido', datos);
        callback({ apellido: 'Fernandez' });
        io.emit('Mensaje2', { direccion: 'Calle Mahler' });
    })
})
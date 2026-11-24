import express from 'express';

const server = express(); // Instancia o servidor

server.get('/', (_, res) => {
    return res.send('Olá DEV');
});     

export { server };
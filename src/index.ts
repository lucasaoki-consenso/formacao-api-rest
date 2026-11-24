import { server } from './server/server';

// Para rodar o arquivo, utilize o comando:
// yarn ts-node-dev ./src/index.ts

// Inicia o servidor na porta 3333
server.listen(3333, () => console.log('App rodando!'));
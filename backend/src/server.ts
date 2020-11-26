import app from './app';
//arquivo responsável por subir a aplicação
import database from './database';

//database.sync({force: true}); //syncronizar o javascript com o banco depois que criar não precisa mais
database.sync(); //removi o force depois que executei pela primeira vez, se deia ele iria recriar a tabela, DROP E CREATE!
console.log('Banco de dados iniciado 3006!');

app.listen(3001);
console.log('Servidor iniciado na porta 3001');
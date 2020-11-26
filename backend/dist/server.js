"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
//arquivo responsável por subir a aplicação
const database_1 = __importDefault(require("./database"));
//database.sync({force: true}); //syncronizar o javascript com o banco depois que criar não precisa mais
database_1.default.sync(); //removi o force depois que executei pela primeira vez, se deia ele iria recriar a tabela, DROP E CREATE!
console.log('Banco de dados iniciado 3006!');
app_1.default.listen(3001);
console.log('Servidor iniciado na porta 3001');

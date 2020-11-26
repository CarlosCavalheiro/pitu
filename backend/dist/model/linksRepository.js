"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linkModel_1 = __importDefault(require("./linkModel"));
function findByCode(code) {
    return linkModel_1.default.findOne({ where: { code } }); //realiza uma select no banco
}
function add(link) {
    return linkModel_1.default.create(link); //create gera o insert sql no banco graçcas ao sequelize
}
function hit(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const link = yield findByCode(code); //await aguarda o tempo de execução da função depois que processar ir até o banco e voltar ela vai continuar
        if (!link)
            return null;
        link.hits++; //acrescenta um no hit antigo
        yield link.save(); //realizar um update no banco
        return link;
    });
}
exports.default = {
    findByCode,
    add,
    hit
};

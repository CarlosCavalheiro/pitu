"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//definiçao de como a tabela deve ser criada no mysql via javascript
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = __importDefault(require("../database"));
const LinkModel = database_1.default.define('link', {
    id: {
        type: sequelize_1.default.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    url: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    code: {
        type: sequelize_1.default.STRING(20),
        unique: true,
        allowNull: false
    },
    hits: {
        type: sequelize_1.default.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
});
exports.default = LinkModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//conexão com o banco
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mysql://root:123456@localhost:3306/pitu_bd');
exports.default = sequelize;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("./knexfile"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const nodeEnv = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : '';
let knexEnv;
if (nodeEnv === 'development') {
    knexEnv = (0, knex_1.default)(knexfile_1.default.development);
}
else {
    knexEnv = (0, knex_1.default)(knexfile_1.default.production);
}
exports.default = knexEnv;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const app = (0, server_1.default)();
const PORT = 8000;
app.listen(PORT, () => {
    console.log('Root server:', `http://localhost:${PORT}`);
});

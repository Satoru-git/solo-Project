"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config = require('../db/knexfile');
const knex = require('knex')(config);
const setUpServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    const PORT = 8000;
    app.use((0, cors_1.default)({
        origin: 'http://localhost:5173',
    }));
    app.get('/data', async (req, res) => {
        const userList = await knex('user_info')
            .select()
            .leftJoin('post', 'id', 'post.post_id');
        res.status(200).send(userList);
    });
    app.get('/data/:id', async (req, res) => {
        const userList = await knex('user_info')
            .select()
            .leftJoin('post', 'id', 'post.post_id');
        const sendList = userList.filter((list) => list.post_id === +req.params.id);
        res.status(200).send(sendList);
    });
    app.post('/data', async (req, res) => {
        const postData = await knex('post').insert(req.body);
        res.status(200).send('投稿しました');
    });
    app.listen(PORT, () => {
        console.log('Root server:', `http://localhost:${PORT}`);
    });
    return app;
};
module.exports = { setUpServer };

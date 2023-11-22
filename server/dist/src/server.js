"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("../db"));
const setUpServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/', express_1.default.static('public'));
    app.use((0, cors_1.default)({
        origin: 'http://localhost:5173',
    }));
    app.get('/data', async (req, res) => {
        const userList = await (0, db_1.default)('user_info')
            .select()
            .leftJoin('post', 'id', 'post.post_id');
        res.status(200).send(userList);
    });
    app.get('/data/:id', async (req, res) => {
        const userList = await (0, db_1.default)('user_info')
            .select()
            .leftJoin('post', 'id', 'post.post_id');
        const sendList = userList.filter((list) => list.post_id === +req.params.id);
        if (sendList[0]) {
            res.status(200).send(sendList);
        }
        else {
            res.status(404).send(sendList);
        }
    });
    app.post('/data', async (req, res) => {
        const postData = await (0, db_1.default)('post').insert(req.body);
        res.status(201).send(req.body);
    });
    return app;
};
exports.default = setUpServer;

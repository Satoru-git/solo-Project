import express from 'express';
import cors from 'cors';
const config = require('../db/knexfile');
const knex = require('knex')(config);

const setUpServer = () => {
  const app = express();
  app.use(express.json());

  const PORT = 8000;

  app.use(
    cors({
      origin: 'http://localhost:5173',
    })
  );

  app.get('/data', async (req, res) => {
    const userList = await knex('user_info')
      .select()
      .leftJoin('post', 'id', 'post.post_id');
    res.status(200).send(userList);
  });

  interface List {
    id: number;
    User_id: string;
    Salt: string;
    Hashed: string;
    post_id: number;
    post_text: string;
    post_imgPath: string;
    post_date: Date;
  }
  app.get('/data/:id', async (req, res) => {
    const userList = await knex('user_info')
      .select()
      .leftJoin('post', 'id', 'post.post_id');
    const sendList = userList.filter(
      (list: List) => list.post_id === +req.params.id
    );
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

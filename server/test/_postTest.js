const chai = require('chai');
const chaiHttp = require('chai-http');
const { setUpServer } = require('../dist/server');

const posts = [
  {
    post_id: 1,
    post_text: 'I came to the snowy mountains to refresh myself.',
    post_imgPath: 'https://ibb.co/M5W2jwc',
    post_date: new Date(),
  },
  {
    post_id: 2,
    post_text: 'I came to the snowy mountains to refresh myself.',
    post_imgPath: 'https://ibb.co/M5W2jwc',
    post_date: new Date(),
  },
  {
    post_id: 2,
    post_text: "Spiderman costumes weren't that popular.",
    post_imgPath: 'https://ibb.co/M7Gfcck',
    post_date: new Date(),
  },
];

const expect = chai.expect;
chai.use(chaiHttp);

describe('Posts API', () => {
  let server;
  let request;
  let postsCopy;

  beforeEach(() => {
    server = setUpServer();
    request = chai.request(server).keepOpen();
    booksCopy = JSON.parse(JSON.stringify(posts));
  });

  afterEach(() => {
    request.close();
  });

  describe('GET /data', () => {
    it('データベースの全データを返す', async () => {
      const res = await request.get('/data');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      expect(res.body.length === 5).to.be.true;
    });
  });

  describe('GET /data/:id', () => {
    it('単体のデータを返す', async () => {
      // const id = postsCopy[0].post_id;
      // const id = 1;
      const res = await request.get('/data/1');
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      // expect(res.body.length === 1).to.be.true;
    });
  });

  // it('should return 404 for a book not found', async () => {
  //   const nonExistentId = 9999;
  //   const res = await request.get(`/data/${nonExistentId}`);
  //   expect(res).to.have.status(404);
  // });
});

// describe('POST /data', () => {
//   it('データの作成', async () => {
//     const newData = {
//       post_id: 10,
//       post_text: 'こんばんは',
//       post_imgPath: 'https://ibb.co/M7Gfcck',
//       post_date: new Date(),
//     };

//     const postResponse = await request.post('/data').send(newData);
//     expect(postResponse).to.have.status(201);
//     expect(postResponse.body).to.deep.equal(newData);
//   });
// });
// });

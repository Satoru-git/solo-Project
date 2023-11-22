import axios from 'axios';

interface Data {
  post_id: number;
  post_text: string;
  post_imgPath: string;
  post_date: Date;
}
// 本番環境
const DataApi = {
  getAll: () => axios.get('data'),
  createPost: (data: Data) => axios.post('data', data),
};

// 開発環境
// import CreateRoot from './CreateRoot';
// const DataApi = {
//   getAll: () => axios.get('data'),
//   createPost: (data: Data) => CreateRoot.post('data', data),
// };

export default DataApi;

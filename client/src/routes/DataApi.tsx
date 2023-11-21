import CreateRoot from './CreateRoot';
interface Data {
  post_id: number;
  post_text: string;
  post_imgPath: string;
  post_date: Date;
}
const DataApi = {
  getAll: () => CreateRoot.get('data'),
  createPost: (data: Data) => CreateRoot.post('data', data),
};

export default DataApi;

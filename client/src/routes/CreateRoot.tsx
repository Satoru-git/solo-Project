import axios from 'axios';

const CreateRoot = axios.create({
  baseURL: 'http://localhost:8000',
});

export default CreateRoot;

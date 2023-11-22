import { useEffect, useState } from 'react';
import './App.css';
import DataApi from './routes/DataApi';
import { AxiosResponse } from 'axios';
import Background from './Components/Background';
import UserPage from './Components/UserPage';
import inputDbData from './global';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [dbData, setDbData] = useState<inputDbData[]>([]);
  const [userInfo, setUserInfo] = useState<inputDbData[]>([]);

  useEffect(() => {
    DataApi.getAll().then((res: AxiosResponse<inputDbData[]>) => {
      setDbData(res.data);
    });
  }, [userInfo]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Background dbData={dbData} setUserInfo={setUserInfo} />}
          />
          <Route path="/user" element={<UserPage userInfo={userInfo} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

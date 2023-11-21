import inputDbData from '../global';
import { Link } from 'react-router-dom';
import './UserHeader.css';
import UserPost from './UserPost';
import { useState } from 'react';

const UserHeader: React.FC<{ userInfo: inputDbData[] }> = ({ userInfo }) => {
  const [isPost, setIsPost] = useState<boolean>(false);

  const onClickHandler = () => {
    setIsPost(true);
  };
  return (
    <>
      <div className="header">
        <Link to={'/'} className="title">
          <h1>Your Town</h1>
        </Link>
        <div className="user-button">
          <Link to={'/'} className="home">
            HOME
          </Link>
          <button className="post-button" onClick={onClickHandler}>
            新規投稿
          </button>
        </div>
      </div>
      {isPost ? <UserPost userInfo={userInfo} setIsPost={setIsPost} /> : null}
    </>
  );
};

export default UserHeader;

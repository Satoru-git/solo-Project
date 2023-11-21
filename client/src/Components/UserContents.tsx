import inputDbData from '../global';
import './UserContents.css';

const UserContents: React.FC<{ userInfo: inputDbData[] }> = ({ userInfo }) => {
  return (
    <>
      {userInfo.map((el, index) => {
        return (
          <div className="contens" key={index}>
            <img
              src="../../public/img/juniperphoton-w3eUfoK7aaY-unsplash.jpg"
              alt=""
              className="contents-img"
            />
            <p className="user-text">場所：東京</p>
            <p className="user-text">アピールポイント：{el.post_text}</p>
            <p className="user-text">投稿者：{el.User_id}</p>
            <p className="timestamp">投稿時間：{el.post_date}</p>
          </div>
        );
      })}
    </>
  );
};
export default UserContents;

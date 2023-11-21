import { useState } from 'react';
import inputDbData from '../global';
import DataApi from '../routes/DataApi';
import './UserPost.css';

interface Props {
  userInfo: inputDbData[];
  setIsPost: (setIsPost: boolean) => void;
}

const UserPost: React.FC<Props> = ({ userInfo, setIsPost }) => {
  const [input, setInput] = useState<string>('');

  const onClickHandler = () => {
    DataApi.createPost({
      post_id: userInfo[0].id,
      post_text: input,
      post_imgPath: 'https://ibb.co/M5W2jwc',
      post_date: new Date(),
    })
      .then((res) => {
        console.log(res.status);
      })
      .catch((e) => console.error(e));

    setIsPost(false);
  };

  return (
    <>
      <div className="post_overlay"></div>
      <div className="post">
        <div className="cancelEl">
          <p className="cancel" onClick={() => setIsPost(false)}>
            キャンセル
          </p>
        </div>
        <textarea onChange={(e) => setInput(e.target.value)}></textarea>
        <button onClick={onClickHandler}>送信</button>
      </div>
    </>
  );
};

export default UserPost;

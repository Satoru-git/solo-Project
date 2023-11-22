import inputDbData from '../global';
import './LoginAccounts.css';
import { Link } from 'react-router-dom';
import imgUrl from '../../public/img/user.png';

interface Props {
  dbData: inputDbData[];
  setUserInfo: (userDb: inputDbData[]) => void;
}
const LoginAccounts: React.FC<Props> = ({ dbData, setUserInfo }) => {
  const userIds = Array.from(new Set(dbData.map((data) => data.User_id)));

  const onClickHandler = (index: number) => {
    const userDb = dbData.filter((data) => +data.id === index + 1);
    setUserInfo(userDb);
  };
  return (
    <>
      <div className="login-accounts">
        {userIds.map((id, index) => (
          <Link to={'/user'} key={index}>
            <div className="account" onClick={() => onClickHandler(index)}>
              <img src={imgUrl} alt="userアイコン" />
              <p>{id}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default LoginAccounts;

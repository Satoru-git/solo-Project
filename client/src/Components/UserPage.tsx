import UserHeader from './UserHeader';
import inputDbData from '../global';
import UserContents from './UserContents';

const UserPage: React.FC<{ userInfo: inputDbData[] }> = ({ userInfo }) => {
  return (
    <>
      <UserHeader userInfo={userInfo} />
      <UserContents userInfo={userInfo} />
    </>
  );
};

export default UserPage;

import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <Link to={'/'} className="title">
        <h1>Your Town</h1>
      </Link>
      <Link to={'/'} className="sign-in">
        サインイン
      </Link>
    </div>
  );
};
export default Header;

import { FC } from 'react';
import inputDbData from '../global';
import Header from './Header';
import LoginAccounts from './LoginAccounts';
import './Background.css';

const backImgPath = [
  '../../public/img/chloe-chavanon-RcaEdvnTPpk-unsplash.jpg',
  '../../public/img/dmitry-ant-wqNIE0i2bsc-unsplash.jpg',
  '../../public/img/juniperphoton-w3eUfoK7aaY-unsplash.jpg',
  '../../public/img/kiheon-jeong-cd2kh9LIUF0-unsplash.jpg',
  '../../public/img/marek-piwnicki-J5VDHdrjPvk-unsplash.jpg',
  '../../public/img/patrik-jensen-lvs0-QHJSNk-unsplash.jpg',
  '../../public/img/pen_ash-iLUTwsTjg8I-unsplash.jpg',
  '../../public/img/philip-myrtorp-DCT3IyyKA7o-unsplash.jpg',
  '../../public/img/philip-myrtorp-DwtVnxlX0jQ-unsplash.jpg',
  '../../public/img/philip-myrtorp-qWnZwwERj2Y-unsplash.jpg',
  '../../public/img/sayan-palui-oYbjVEI1beE-unsplash.jpg',
  '../../public/img/susan-q-yin-ImoVrhUBeFs-unsplash.jpg',
];

interface Props {
  dbData: inputDbData[];
  setUserInfo: (setUserInfo: inputDbData[]) => void;
}
const Background: FC<Props> = ({ dbData, setUserInfo }) => {
  return (
    <>
      <div className="back-ground">
        {backImgPath.map((path, index) => (
          <img src={path} alt="local画像" key={index} className="back-img" />
        ))}
      </div>
      <div className="overlay"></div>
      <Header />
      <LoginAccounts dbData={dbData} setUserInfo={setUserInfo} />
    </>
  );
};

export default Background;

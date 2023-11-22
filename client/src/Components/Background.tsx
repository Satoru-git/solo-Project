import { FC } from 'react';
import inputDbData from '../global';
import Header from './Header';
import LoginAccounts from './LoginAccounts';
import './Background.css';
import imgUrl01 from '../../public/img/chloe-chavanon-RcaEdvnTPpk-unsplash.jpg';
import imgUrl02 from '../../public/img/dmitry-ant-wqNIE0i2bsc-unsplash.jpg';
import imgUrl03 from '../../public/img/juniperphoton-w3eUfoK7aaY-unsplash.jpg';
import imgUrl04 from '../../public/img/kiheon-jeong-cd2kh9LIUF0-unsplash.jpg';
import imgUrl05 from '../../public/img/marek-piwnicki-J5VDHdrjPvk-unsplash.jpg';
import imgUrl06 from '../../public/img/patrik-jensen-lvs0-QHJSNk-unsplash.jpg';
import imgUrl07 from '../../public/img/pen_ash-iLUTwsTjg8I-unsplash.jpg';
import imgUrl08 from '../../public/img/philip-myrtorp-DCT3IyyKA7o-unsplash.jpg';
import imgUrl09 from '../../public/img/philip-myrtorp-DwtVnxlX0jQ-unsplash.jpg';
import imgUrl10 from '../../public/img/philip-myrtorp-qWnZwwERj2Y-unsplash.jpg';
import imgUrl11 from '../../public/img/sayan-palui-oYbjVEI1beE-unsplash.jpg';
import imgUrl12 from '../../public/img/susan-q-yin-ImoVrhUBeFs-unsplash.jpg';

// const backImgPath = [
//   '../../public/img/chloe-chavanon-RcaEdvnTPpk-unsplash.jpg',
//   '../../public/img/dmitry-ant-wqNIE0i2bsc-unsplash.jpg',
//   '../../public/img/juniperphoton-w3eUfoK7aaY-unsplash.jpg',
//   '../../public/img/kiheon-jeong-cd2kh9LIUF0-unsplash.jpg',
//   '../../public/img/marek-piwnicki-J5VDHdrjPvk-unsplash.jpg',
//   '../../public/img/patrik-jensen-lvs0-QHJSNk-unsplash.jpg',
//   '../../public/img/pen_ash-iLUTwsTjg8I-unsplash.jpg',
//   '../../public/img/philip-myrtorp-DCT3IyyKA7o-unsplash.jpg',
//   '../../public/img/philip-myrtorp-DwtVnxlX0jQ-unsplash.jpg',
//   '../../public/img/philip-myrtorp-qWnZwwERj2Y-unsplash.jpg',
//   '../../public/img/sayan-palui-oYbjVEI1beE-unsplash.jpg',
//   '../../public/img/susan-q-yin-ImoVrhUBeFs-unsplash.jpg',
// ];

const backImgPath = [
  imgUrl01,
  imgUrl02,
  imgUrl03,
  imgUrl04,
  imgUrl05,
  imgUrl06,
  imgUrl07,
  imgUrl08,
  imgUrl09,
  imgUrl10,
  imgUrl11,
  imgUrl12,
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

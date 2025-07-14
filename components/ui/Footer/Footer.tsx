import Image from 'next/image';
import logo from '@/assets/icons/logo3.svg?url';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo">
            <Image src={logo} alt="logo" />
          </div>
          <nav>
            <ul className="footer__navigation">
              <li>
                <a href="#a">Privacy Policy</a>
              </li>
              <li>
                <a href="#a">Term & Conditions</a>
              </li>
              <li>
                <a href="#a">About Us</a>
              </li>
              <li>
                <a href="#a">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            © 2025 EATLY All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

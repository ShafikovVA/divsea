import './headerMenu.scss';
import Image from 'next/image';
import logo from '@/assets/icons/logo.svg?url';
import cross from '@/assets/icons/cross.svg?url';
import Button from '@/components/ui/Button/Button';
import Search from '@/components/ui/Search/Search';
import { useAppDispatch } from '@/store/hooks';
import { setIsMobileMenuOpen } from '@/store/reducers/mobileMenuReducer';

const HeaderMenu = () => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setIsMobileMenuOpen(false));
  };

  return (
    <div className="header-menu">
      <div className="container">
        <div className="header-menu__logo">
          <Image src={logo} alt="logo" />
          <Button className={'close'} onClick={handleClose}>
            <Image src={cross} alt={'close'}></Image>
          </Button>
        </div>
        <div className="header-menu__search-container">
          <Search />
        </div>
        <nav>
          <ul className="header-menu__navigation">
            <li>
              <a href="#a">Discover</a>
            </li>
            <li>
              <a href="#a">creators</a>
            </li>
            <li>
              <a href="#a">Sell</a>
            </li>
            <li>
              <a href="#a">Stats</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;

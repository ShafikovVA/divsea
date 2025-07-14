'use client';
import './header.scss';
import Image from 'next/image';
import logo from '@/assets/icons/logo.svg?url';
import logo2 from '@/assets/icons/logo2.svg?url';
import burger from '@/assets/icons/burger.svg?url';
import Search from '@/components/ui/Search/Search';
import Button from '@/components/ui/Button/Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useAdaptive } from '@/lib/hooks/useAdaptive';
import HeaderMenu from '@/components/ui/HeaderMenu/HeaderMenu';
import {
  isMobileMenuOpenSelector,
  setIsMobileMenuOpen,
} from '@/store/reducers/mobileMenuReducer';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Header = () => {
  const dispatch = useAppDispatch();
  const adaptive = useAppSelector((state) => state.adaptive);
  const isMenuOpen = useSelector(isMobileMenuOpenSelector);

  const handleClickOpen = () => {
    dispatch(setIsMobileMenuOpen(true));
  };

  useAdaptive();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__left">
              <div className="header__logo">
                <Image src={adaptive.isTable ? logo2 : logo} alt="logo" />
              </div>
              <nav>
                <ul>
                  <li>
                    <Link href={'/catalog'}>Discover</Link>
                  </li>
                  <li>
                    <a href="#a">creators</a>
                  </li>
                  <li>
                    <a href="#a">Sell</a>
                  </li>
                  <li>
                    <a href="#a">stats</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__right">
              <Search />
              <Button className="button-primary uppercase">
                Connect Wallet
              </Button>
              <Button onClick={handleClickOpen} className="burger">
                <Image src={burger} alt="burger" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen.open && <HeaderMenu />}
    </>
  );
};
export default Header;

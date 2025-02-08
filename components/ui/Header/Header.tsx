'use client'
import './header.scss';
import Image from 'next/image';
import logo from '@/assets/icons/logo.svg';
import logo2 from '@/assets/icons/logo2.svg';
import burger from '@/assets/icons/burger.svg';
import Search from "@/components/ui/Search/Search";
import Button from "@/components/ui/Button/Button";
import {useAppSelector} from "@/store/hooks";
import {useAdaptive} from "@/lib/hooks/useAdaptive";

const Header = () => {
  const adaptive = useAppSelector(state => state.adaptive);
  useAdaptive();
  console.log(adaptive);
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left">
            <div className="header__logo">
              <Image src={adaptive.isTable ? logo2 : logo} alt="logo"/>
            </div>
            <nav>
              <ul>
                <li><a href="">Discover</a></li>
                <li><a href="">creators</a></li>
                <li><a href="">Sell</a></li>
                <li><a href="">stats</a></li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <Search/>
            <Button className='button-primary uppercase'>Connect Wallet</Button>
            <Button className='burger'>
              <Image src={burger} alt="burger"/>
            </Button>
          </div>
        </div>
      </div>

    </header>
  )
}
export default Header;
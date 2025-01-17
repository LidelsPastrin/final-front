'use client';
import Link from 'next/link';
import { AuthForm } from '../AuthForm/AuthForm';
import { Overlay } from '../Overlay/Overlay';
import { Popup } from '../Popup/Popup';
import { useStore } from '@/app/store/app-store';

import Styles from './Header.module.css';
import { useState} from 'react';
import { usePathname } from 'next/navigation'; 
import { endpoints } from '@/app/api/config';

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(false);
  const pathname = usePathname();
  const authContext = useStore();

  const handleLogout = () => {
    authContext.logout(); 
  };

  
  
  const openPopup = () =>{
    setPopupIsOpened(true)
  }
  const closePopup = () =>{
    setPopupIsOpened(false)
  }
  const setAuth = () =>{
    setIsAuthorized(true);
  }
  
    return(
      <header className={Styles["header"]}>
      <Link href="/" className={Styles["logo"]}>
        <img className={Styles["logo__image"]} src="/images/logo.svg" alt="Логотип Pindie" />
      </Link>
      <nav className={Styles["menu"]}> 
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
          <Link href="/new" className={`${Styles["menu__link"]} ${pathname === "/new" ? Styles["menu__link_active"] : ""}`}> Новинки</Link> 
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/popular"  className={`${Styles["menu__link"]} ${pathname === "/popular" ? Styles["menu__link_active"] : ""}`}>Популярные</Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/shooters" className={`${Styles["menu__link"]} ${pathname === "/shooters" ? Styles["menu__link_active"] : ""}`}>Шутеры</Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/runners" className={`${Styles["menu__link"]} ${pathname === "/runners" ? Styles["menu__link_active"] : ""}`}>Раннеры</Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/pixel-games" className={`${Styles["menu__link"]} ${pathname === "/pixel-games" ? Styles["menu__link_active"] : ""}`}>Пиксельные</Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/tds" className={`${Styles["menu__link"]} ${pathname === "/tds" ? Styles["menu__link_active"] : ""}`}>TDS</Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
        {authContext.isAuth ? (
          <div className={Styles["myPage-enter"]}>
          <Link href='/users/me'>
            <img src='/images/vector.webp' className={Styles["avatar"]}/>
          </Link>
            <button className={Styles["auth__button"]} onClick={handleLogout}>
              Выйти
            </button>
            </div>
          ) : (
            <button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>
)}
        </div>
      </nav>
      <Overlay popupIsOpened={popupIsOpened} closePopup={closePopup} />
      <Popup popupIsOpened={popupIsOpened} closePopup={closePopup}>
        <AuthForm close={closePopup}/>
      </Popup>
    </header>
    )
  }
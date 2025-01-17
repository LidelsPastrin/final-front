import Styles from './Footer.module.css'
import Link from 'next/link';

export const Footer = () => {
    return(
      <footer className={Styles["footer"]}>
      <Link href="./index.html" className={Styles["footer__logo"]}>
        <span className={Styles["footer__logo-name"]}>pindie</span>
        <span className={Styles["footer__logo-copy"]}>, XXI век</span>
      </Link>
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          <Link href="" className={`button ${Styles["social-list__link"]}`}>YT</Link>
        </li>
        <li className={Styles["social-list__item"]}>
          <Link href="" className={`button ${Styles["social-list__link"]}`}>ВК</Link>
        </li>
        <li className={Styles["social-list__item"]}>
          <Link href="" className={`button ${Styles["social-list__link"]}`}>TG</Link>
        </li>
      </ul>
    </footer>
    );
  }
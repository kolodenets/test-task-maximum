import s from "./header.module.scss";
import Logo from "../../../public/assets/logo.svg";
import Link from "next/link";

import Image from "next/image";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <Link href="/">
          <Image src={Logo} alt="Логотип" className={s.logo} />
        </Link>
        <div className={s.divider}></div>
        <span className={s.logoTitle}>Официальный дилер Максимум </span>
      </div>
    </header>
  );
};

export default Header;

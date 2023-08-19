import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/style.module.css";
import { NAVBAR_DATA } from "../constants/navbar";
import { useEffect, useState } from "react";
import _debounce from "lodash/debounce";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className={style.gradientBorder}></div>
      <div className={style.topbar}>
        <a className={style.rekha} href="#" title="Rekha">
          {"<" + "Rekha" + "/>"}
        </a>
        <nav className={style.navbar}>
          {NAVBAR_DATA.map((navItem) => {
            return (
              <>
                <Link
                  key={navItem.name}
                  href={navItem.link}
                  className={`${style.showIconMenu} ${style.navitem} ${
                    router.pathname === navItem.link ? style.active : ""
                  }`}
                >
                  {navItem.icon}
                </Link>

                <Link
                  key={navItem.name + new Date().getMilliseconds()}
                  href={navItem.link}
                  className={`${style.showMenu} ${style.navitem} ${
                    router.pathname === navItem.link ? style.active : ""
                  }`}
                >
                  {navItem.name}
                </Link>
              </>
            );
          })}
        </nav>
      </div>
    </>
  );
}

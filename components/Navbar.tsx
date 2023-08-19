import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/style.module.css";
import { NAVBAR_DATA } from "../constants/navbar";
import { useEffect, useState } from "react";
import _debounce from "lodash/debounce";

export default function Navbar() {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResizeDebounced = _debounce(function handleResize() {
      console.log("first resize");
      setWindowWidth(window.innerWidth);
    }, 250);
    console.log("first");
    window.addEventListener("resize", handleResizeDebounced);
    handleResizeDebounced();
    return () => window.removeEventListener("resize", handleResizeDebounced);
  }, []);

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
              <Link
                key={navItem.name}
                href={navItem.link}
                className={`${style.navitem} ${
                  router.pathname === navItem.link ? style.active : ""
                }`}
              >
                {windowWidth < 600 ? navItem.icon : navItem.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

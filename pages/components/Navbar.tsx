import Link from "next/link";
import { useRouter } from "next/router";
import style from "../../styles/style.module.css";
import { NAVBAR_DATA } from "../../constants/navbar";
import Image from "next/image";
export const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className={style.gradientBorder}></div>
      <div className={style.topbar}>
        <a className={style.rekha} href="#" title="Rekha">
          रेखा
        </a>
        <nav className={style.navbar}>
          {NAVBAR_DATA.map((obj) => {
            return (
              <Link
                key={obj.link}
                href={obj.goto}
                className={`${style.navitem} ${
                  router.pathname === obj.goto ? style.active : ""
                }`}
              >
                {obj.link}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

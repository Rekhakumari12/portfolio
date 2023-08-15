import React from "react";
import { MainWrapper, SectionWrapper, Space } from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import Image from "next/image";
import { WORK_HISTORY } from "../constants/workHistory";
import Navbar from "../components/Navbar";
import WorkProgress from "../components/WorkProgress";
// @refresh reset
export default function about() {
  return (
    <MainWrapper>
      <Navbar />
      <SectionWrapper>
        <Space my="5">
          <div className={`${style.fontNato} ${style.fontSize}`}>
            <p>
              {/* <Image
              src="/namaste.gif"
              alt="namaste gif"
              width={28}
              height={28}
              priority
              className={style.namaste}
              title="Namaste"
            />{" "} */}
              Namasty! My name is Rekha Kumari, a Frontend Engineer from Punjab,
              India with 2 years of experience in designing and developing
              visually pleasing and user-friendly websites and web applications.
            </p>
            <p>
              I hold a Bachelor&apos;s degree in Computer Applications. My
              skillset includes proficiency in HTML, CSS, JavaScript and
              frameworks such as React, as well as experience in responsive
              design, cross-browser compatibility and accessibility guidelines.
            </p>
            <p>
              I am passionate about creating visually appealing, intuitive and
              accessible digital experiences that meet the needs of both the
              business and the end user. I am always looking to stay up-to-date
              with the latest industry trends and best practices and am excited
              to connect and collaborate with other professionals in the field.
            </p>
            <p>
              In my free time, I love to hit the trails for some trekking and
              explore new places through traveling. I&apos;m also a music
              enthusiast and love to listen to various genres. Audio books are a
              great way to keep my mind sharp, and when it comes to movies,
              science fiction is my go-to. These hobbies help me to bring
              balance to my life, and I find them to be a great source of
              inspiration for my work as a frontend developer.
            </p>
            <p>
              Feel free to connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/rekhakumari12/"
                className={style.underline}
              >
                LinkedIn
              </a>
              , I would be happy to connect and expand my professional network.
            </p>
          </div>
          <hr className={style.divider} />
          <h2 className={style.font2rem}>Experience</h2>
          <section className={style.work}>
            <div className={style.flex_item_center}>
              <a href="https://www.simpplr.com/" className={style.href}>
                <Image
                  src="/simpplr.jpeg"
                  alt="simpplr Logo"
                  width={30}
                  height={30}
                  priority
                  className={style.rounded}
                />
              </a>
              <div className={style.fullWidth}>
                <a href="https://www.simpplr.com/" className={style.href}>
                  <h4>Simpplr</h4>
                </a>
                <ul>
                  <li className={style.flex_space_between}>
                    <div className={style.bullet}></div>
                    <div>
                      <span>Software Engineer </span>
                      <p className={style.span}>Gurugram, Haryana, India</p>
                    </div>
                    <p className={style.span}>Dec 2023 - Present</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.flex_item_center}>
              <a href="https://medly.com/en-us">
                <Image
                  src="/medly.jpeg"
                  alt="medly Logo"
                  width={30}
                  height={30}
                  priority
                  className={style.rounded}
                />
              </a>
              <div className={style.fullWidth}>
                <a href="https://medly.com/en-us" className={style.href}>
                  <h4>Medly Pharmacy</h4>
                </a>
                <WorkProgress data={WORK_HISTORY} />
              </div>
            </div>
          </section>
          <hr className={style.divider} />
          <h2 className={style.font2rem}>About this site</h2>
          <section className={style.about_site}>
            <p>In case you were wondering this site is:</p>
            <ul>
              <li>
                Built on a Mac using{" "}
                <a
                  target="_blank"
                  href="https://code.visualstudio.com/"
                  className={style.underline}
                  rel="noreferrer"
                >
                  Visual Studio Code
                </a>
              </li>
              <li>
                Written in{" "}
                <a
                  target="_blank"
                  href="https://nextjs.org/"
                  className={style.underline}
                  rel="noreferrer"
                >
                  Next.js
                </a>{" "}
                with deployment via{" "}
                <a
                  target="_blank"
                  href="https://vercel.com/"
                  className={style.underline}
                  rel="noreferrer"
                >
                  Vercel
                </a>
              </li>
              <li>
                Set in the beautiful{" "}
                {/* <a
                  target="_blank"
                  href="https://fonts.google.com/noto/specimen/Noto+Sans+Mono?category=Monospace"
                  className={style.underline}
                  rel="noreferrer"
                >
                  Noto Sans Mono
                </a>{" "}
                &{" "} */}
                <a
                  target="_blank"
                  href="https://fonts.google.com/?query=Lato&category=Serif,Sans+Serif,Display,Monospace"
                  className={style.underline}
                  rel="noreferrer"
                >
                  Lato
                </a>{" "}
                typeface
              </li>
              <li>
                Used{" "}
                <a
                  target="_blank"
                  href="https://fontawesome.com/"
                  className={style.underline}
                  rel="noreferrer"
                >
                  FontAwesome
                </a>{" "}
                for icons
              </li>
            </ul>
          </section>
        </Space>
      </SectionWrapper>
    </MainWrapper>
  );
}

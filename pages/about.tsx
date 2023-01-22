import React from "react";
import { Navbar } from "./components/Navbar";
import { MainWrapper, SectionWrapper } from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import Image from "next/image";
// @refresh reset
export default function about() {
  return (
    <MainWrapper>
      <Navbar />
      <SectionWrapper>
        <div className={style.intro}>
          <p>
            <Image
              src="/namaste.gif"
              alt="namaste gif"
              width={28}
              height={28}
              priority
              className={style.namaste}
              title="Namaste"
            />{" "}
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
            with the latest industry trends and best practices and am excited to
            connect and collaborate with other professionals in the field.
          </p>
          <p>
            In my free time, I love to hit the trails for some trekking and
            explore new places through traveling. I&apos;m also a music
            enthusiast and love to listen to various genres. Audio books are a
            great way to keep my mind sharp, and when it comes to movies,
            science fiction is my go-to. These hobbies help me to bring balance
            to my life, and I find them to be a great source of inspiration for
            my work as a frontend developer.
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
          <hr className={style.divider} />
          <h2>Experience</h2>
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
                  <li className={style.flex}>
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
                <ul>
                  <li className={style.flex}>
                    <div className={style.vertical_line}></div>
                    <div className={style.baseline_flex}>
                      <div className={style.bullet}></div>
                      <div>
                        <span>Software Development Engineer-1</span>
                        <p className={style.span}>Pune, Maharashtra, India</p>
                      </div>
                    </div>
                    <p className={style.span}>Apr 2022 - Nov 2022</p>
                  </li>
                  <li className={style.flex}>
                    <div className={style.baseline_flex}>
                      <div className={style.bullet}></div>
                      <div>
                        <span>Associate Frontend Engineer</span>
                        <p className={style.span}>Pune, Maharashtra, India</p>
                      </div>
                    </div>
                    <p className={style.span}>Jul 2021 - Apr 2022</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <hr className={style.divider} />
          <h2>About this site</h2>
          <section className={style.about_site}>
            <p>In case you were wondering this site is:</p>
            <ul>
              <li>
                Built on a Mac using{" "}
                <a
                  href="https://code.visualstudio.com/"
                  className={style.underline}
                >
                  Visual Studio Code
                </a>
              </li>
              <li>
                Written in{" "}
                <a href="https://nextjs.org/" className={style.underline}>
                  Next.js
                </a>{" "}
                with deployment via{" "}
                <a href="https://www.netlify.com/" className={style.underline}>
                  Netlify
                </a>
              </li>
              <li>
                Set in the beautiful{" "}
                <a
                  href="https://fonts.google.com/noto/specimen/Noto+Sans+Mono?category=Monospace"
                  className={style.underline}
                >
                  Noto Sans Mono
                </a>{" "}
                typeface
              </li>
            </ul>
          </section>
        </div>
      </SectionWrapper>
    </MainWrapper>
  );
}

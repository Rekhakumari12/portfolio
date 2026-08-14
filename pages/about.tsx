import React from "react";
import { MainWrapper, SectionWrapper, Space } from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import Image from "next/image";
import { WORK_HISTORY } from "../constants/workHistory";
import Navbar from "../components/Navbar";
import WorkProgress from "../components/WorkProgress";
import Skills from "../components/Skills";
// @refresh reset
export default function about() {
  return (
    <MainWrapper>
      <Navbar />
      <SectionWrapper>
        <Space my="5">
          <div className={`${style.fontNato} ${style.fontSize}`}>
            <h1 className={style.h1}>
              👋{" "}
              {"Hello!".split("").map((letter, id) => (
                <span key={letter + id.toString()}>{letter}</span>
              ))}
            </h1>
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
              <br />
              My name is Rekha Kumari, a Frontend Engineer from India
              with 4.5 years of experience designing and building web
              applications that are fast, accessible, and a genuine pleasure to
              use.
            </p>
            <p>
              I hold a Bachelor&apos;s degree in Computer Science, and over
              the years I&apos;ve grown from writing my first lines of HTML and
              CSS into engineering thoughtful, scalable interfaces. These days my
              core toolkit is React and Next.js with TypeScript, built on a solid
              foundation of JavaScript, HTML and CSS. I care deeply about the
              details users feel but rarely notice &mdash; responsive layouts,
              cross-browser consistency, web performance and accessibility.
            </p>
            <p>
              What excites me most is turning complex problems into experiences
              that feel simple and effortless. Beyond shipping features, I love
              raising the bar on quality &mdash; clean, well-tested code and the
              kind of engineering standards that make a whole team faster.
              I&apos;m always learning, keeping up with where the web is headed,
              and I enjoy collaborating with other people who care about building
              great products.
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
          <h2 className={style.font2rem}>Skills</h2>
          <Skills />
          <hr className={style.divider} />
          <h2 className={style.font2rem}>Experience</h2>
          <section className={style.work}>
            <div className={style.flex_item_center}>
              <a href="https://www.technogise.com/" className={style.href}>
                <Image
                  src="/technogise.svg"
                  alt="Technogise Logo"
                  width={30}
                  height={30}
                  priority
                  className={style.rounded}
                />
              </a>
              <div className={style.fullWidth}>
                <a href="https://www.technogise.com/" className={style.href}>
                  <h4>Technogise</h4>
                </a>
                <ul>
                  <li className={style.flex_space_between}>
                    <div className={style.bullet}></div>
                    <span>Software Engineer</span>
                    <p className={style.span}>Apr 2025 - Present</p>
                    <p className={`${style.span} ${style.exp_location}`}>
                      Client: The Economist Group &middot; Pune, India
                    </p>
                  </li>
                </ul>
              </div>
            </div>
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
                    <span>Software Engineer</span>
                    <p className={style.span}>Nov 2022 - Nov 2024</p>
                    <p className={`${style.span} ${style.exp_location}`}>
                      Gurugram, Haryana, India
                    </p>
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

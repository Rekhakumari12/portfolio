import React from "react";
import style from "../styles/style.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { MainWrapper, SectionWrapper } from "../styles/Wrapper.style";
import Navbar from "./components/Navbar";
// @refresh reset
export default function Home() {
  const router = useRouter();

  const SocialMedia = [
    {
      href: "https://github.com/Rekhakumari12",
      title: "Github",
      src: "/github.svg",
      alt: "github Logo",
    },
    {
      href: "https://www.linkedin.com/in/rekhakumari12",
      title: "LinkedIn",
      src: "/linkedin-in.svg",
      alt: "linkedin Logo",
    },
    {
      href: "https://www.linkedin.com/in/rekhakumari12",
      title: "Twitter",
      src: "/twitter.svg",
      alt: "twitter Logo",
    },
  ];

  return (
    <MainWrapper>
      <Navbar />
      <SectionWrapper>
        <h1 className={style.h1}>
          {"Frontend Engineer who writes clean, elegant and efficient code."
            .split("")
            .map((letter, id) => (
              <span key={letter + id.toString()}>{letter}</span>
            ))}
        </h1>
        <div className={style.intro}>
          <p>
            I&apos;m Rekha Kumari, Frontend Engineer living in Punjab, India. I
            graduated with Computer Application in 2020, currently working with
            awesome folks at{" "}
            <a href="https://www.simpplr.com/" className={style.underline}>
              Simpplr
            </a>
            .
          </p>
          <p>
            Check out my expertise or just add me as a connection on{" "}
            <a
              href="https://www.linkedin.com/in/rekhakumari12/"
              className={style.underline}
            >
              LinkedIn
            </a>
            . Working with individuals that enjoy similar things excites me.
          </p>
          {/* <p>
            Aside from them, I&apos;m an inquisitive person. I like discovering
            new things every day. I adore travelling to new locations.
            Photographing, trekking, watching sci-fi shows & movies,{" "}
            <a
              href="https://open.spotify.com/playlist/6K5KnrSMThYcXLgxTatz2m"
              className={style.underline}
            >
              listening to music
            </a>{" "}
            and audiobooks are some of my other hobbies.
          </p> */}
        </div>
        <ul className={style.social_media_links}>
          {SocialMedia.map((sm) => {
            return (
              <li title={sm.title} key={sm.title}>
                <a href={sm.href}>
                  <Image
                    src={sm.src}
                    alt={sm.alt}
                    width={25}
                    height={25}
                    priority
                  />
                </a>
              </li>
            );
          })}

          <li className={style.button}>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=rekhakumari44400@google.com&tf=cm"
              target="_blank"
              rel="noreferrer"
            >
              Email me
            </a>
          </li>
        </ul>
        <hr className={style.divider} />
        <section className={style.featured_projects}>
          <h2>Featured projects</h2>
          <div className={style.featured_projects_tiles}>
            <p>
              A collection of some side projects that have shipped recently.
            </p>
            <a href="#" className={style.tile}>
              <div>
                <Image
                  src="/wordfile.svg"
                  alt="wordfile Logo"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <p>
                A curated library of screenshots & interaction patterns from the
                world&apos;s best digital products. Gain insights, explore
                trends and understand competitors and best practices.
              </p>
            </a>
            <a href="#" className={style.tile}>
              <div>
                <Image
                  src="/store.svg"
                  alt="store Logo"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <p>
                A curated library of screenshots & interaction patterns from the
                world&apos;s best digital products. Gain insights, explore
                trends and understand competitors and best practices.
              </p>
            </a>
          </div>
        </section>
      </SectionWrapper>
    </MainWrapper>
  );
}

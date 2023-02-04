import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Divider, MainWrapper, SectionWrapper } from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import FaqCategories from "./components/FaqCategories";

type props = {
  skill: boolean;
  education: boolean;
  general: boolean;
};

export default function Faq() {
  const [state, setState] = useState<props>({
    skill: true,
    education: false,
    general: false,
  });
  const handleClick = (cat: string) => {
    if (cat === "skill") {
      setState({ education: false, skill: true, general: false });
    }
    if (cat === "education") {
      setState({ education: true, skill: false, general: false });
    }
    if (cat === "general") {
      setState({ education: false, skill: false, general: true });
    }
  };
  return (
    <MainWrapper>
      <Navbar />
      <SectionWrapper>
        <h1 className={style.h1}>
          {"Frequently Asked Questions".split("").map((letter, id) => (
            <span key={letter + id.toString()}>{letter}</span>
          ))}
        </h1>
        <Divider my="3" />
        <FaqCategories handleClick={handleClick} />
        {(state.skill && <div style={{ marginTop: "3rem" }}>Skills</div>) ||
          (state.education && (
            <div style={{ marginTop: "3rem" }}>education</div>
          )) ||
          (state.general && <div style={{ marginTop: "3rem" }}>general</div>)}
      </SectionWrapper>
    </MainWrapper>
  );
}

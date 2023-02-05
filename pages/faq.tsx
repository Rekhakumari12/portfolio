import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import {
  Divider,
  FAQWrapper,
  MainWrapper,
  SectionWrapper,
} from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import FaqCategories from "./components/FaqCategories";
import Image from "next/image";
import { Accordion } from "./components/Accordian";
import { Education_Faq, General_Faq, Skill_Faq } from "../constants/faq";
Accordion;
type props = {
  skill: boolean;
  education: boolean;
  general: boolean;
};

type activeProps = "skill" | "general" | "education";

export default function Faq() {
  const [state, setState] = useState<props>({
    skill: true,
    education: false,
    general: false,
  });
  const [active, setActive] = useState<activeProps>("skill");
  const [faqActive, setFaqActive] = useState();
  const handleClick = (cat: string) => {
    if (cat === "skill") {
      setActive("skill");
      setState({ education: false, skill: true, general: false });
    }
    if (cat === "education") {
      setActive("education");
      setState({ education: true, skill: false, general: false });
    }
    if (cat === "general") {
      setActive("general");
      setState({ education: false, skill: false, general: true });
    }
  };
  const handleButtonClick = () => {};
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
        <FaqCategories handleClick={handleClick} active={active} />
        {(state.skill && (
          <FAQWrapper style={{ marginTop: "3rem" }}>
            {Skill_Faq.map((d) => (
              <Accordion title={d.ques} key={d.id}>
                {d.ans}
              </Accordion>
            ))}
          </FAQWrapper>
        )) ||
          (state.education && (
            <FAQWrapper style={{ marginTop: "3rem" }}>
              {Education_Faq.map((d) => (
                <Accordion title={d.ques} key={d.id} links={d.links}>
                  {d.ans}
                </Accordion>
              ))}
            </FAQWrapper>
          )) ||
          (state.general && (
            <FAQWrapper style={{ marginTop: "3rem" }}>
              {General_Faq.map((d) => (
                <Accordion title={d.ques} key={d.id}>
                  {d.ans}
                </Accordion>
              ))}
            </FAQWrapper>
          ))}
      </SectionWrapper>
    </MainWrapper>
  );
}

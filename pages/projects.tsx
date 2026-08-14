import React from "react";
import {
  Divider,
  MainWrapper,
  SectionWrapper,
  Space,
} from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import { projectData } from "../constants/projectdata";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Certifications from "../components/Certifications";
export default function Projects() {
  return (
    <MainWrapper>
      <Navbar />
      <SectionWrapper>
        <div id="projecttitle">
          <h1 className={style.h1}>
            🎯{" "}
            {"Projects".split("").map((letter, id) => (
              <span key={letter + id.toString()}>{letter}</span>
            ))}
          </h1>
        </div>

        <Space my="1">
          <p className={`${style.fontNato} ${style.fontSize}`}>
            Here&apos;s a small selection of some of my recent projects and
            experiences.
          </p>
          <Divider my="3" />
          {projectData.length
            ? projectData?.map((data, i) => (
                <ProjectCard data={data} key={i} />
              ))
            : "Needs to be added"}
        </Space>

        <Divider my="3" />
        <Certifications />
      </SectionWrapper>
    </MainWrapper>
  );
}

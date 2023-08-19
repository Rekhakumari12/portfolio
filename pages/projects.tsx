import React, { useEffect, useRef, useState } from "react";
import {
  Divider,
  MainWrapper,
  SectionWrapper,
  Space,
} from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import Image from "next/image";
import { projectData } from "../constants/projectdata";
import { Options } from "../constants/lang";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
  const inputRef = useRef<HTMLSelectElement>(null);
  const [inputValue, setInputValue] = useState<string>("all");
  const [filteredProject, setFilteredData] = useState(projectData);

  useEffect(() => {
    const filtered = projectData?.filter((project) =>
      project && project.langObj.includes(inputValue) ? project : []
    );

    inputValue === "all"
      ? setFilteredData(projectData)
      : setFilteredData(filtered);
  }, [inputValue]);

  const handleChange = () => {
    if (inputRef.current?.value) {
      setInputValue(inputRef.current.value);
    } else {
      setInputValue("all");
    }
  };

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
          <div className={"searchbox"}>
            <Image
              src="/filter.svg"
              alt="filter icon"
              width={15}
              height={15}
              priority
              className="search"
            />
            <select onChange={handleChange} ref={inputRef} id="input">
              <option value="all" defaultValue={"all"}>
                All Projects
              </option>
              {Options.map((option) => (
                <option value={option} key={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Space my="1">
          <p className={`${style.fontNato} ${style.fontHalfRem}`}>
            Here&apos;s a small selection of some of my recent projects and
            experiences.
          </p>
          <Divider my="3" />
          {filteredProject.length
            ? filteredProject?.map((data, i) => (
                <ProjectCard data={data} key={i} />
              ))
            : "Needs to be added"}
        </Space>
      </SectionWrapper>
    </MainWrapper>
  );
}

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Navbar } from "./components/Navbar";
import {
  Divider,
  MainWrapper,
  SectionWrapper,
  Space,
} from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import { ProjectCard } from "./components/ProjectCard";
import Image from "next/image";
import { projectData } from "../constants/projectdata";
export default function Projects() {
  const inputRef = useRef<HTMLSelectElement>(null);
  const [inputValue, setInputValue] = useState<string>("all");
  const [filteredProject, setFilteredData] = useState(projectData);
  const handleChange = () => {
    console.log(inputRef.current?.value, "inputRef");
    if (inputRef.current?.value) {
      setInputValue(inputRef.current.value);
    } else {
      setInputValue("all");
    }
  };

  useEffect(() => {
    const filtered = projectData.filter((project) => {
      if (project.langObj.includes(inputValue)) {
        return project;
      }
    });
    inputValue === "all"
      ? setFilteredData(projectData)
      : setFilteredData(filtered);
  }, [inputValue]);

  const Options = [
    "javascript",
    "typescript",
    "html",
    "css",
    "tailwind",
    "material ui",
    "react",
  ];
  return (
    <MainWrapper>
      <Navbar />
      <SectionWrapper>
        <div id="projecttitle">
          <h1 className={style.h1}>
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
          <p>
            Here&apos;s a small selection of some of my recent projects and
            experiences.
          </p>
          <Divider my="3" />
          {filteredProject &&
            filteredProject.map((data, i) => (
              <ProjectCard data={data} key={i} />
            ))}
        </Space>
      </SectionWrapper>
    </MainWrapper>
  );
}

import React from "react";
import {
  Button,
  Divider,
  ProjectCard as ProjectCardWrapper,
} from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

type Props = {
  title: string;
  desc?: string;
  repoLink: { name: string; url: string };
  liveLink: { name: string; url: string };
  langObj: string[];
  shadowColor: string;
};

type DataProps = {
  data: Props;
};

export default function ProjectCard({ data }: DataProps) {
  const { title, desc, repoLink, liveLink, langObj, shadowColor } = data;
  return (
    <>
      <ProjectCardWrapper shadowColor={shadowColor}>
        <div className={style.projectInfo}>
          <div id="title">{title}</div>
          {desc && <p id="desc" dangerouslySetInnerHTML={{ __html: desc }} />}
        </div>
        <br />
        <div className={style.flex_item_center}>
          <Tilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <Button>
              <Image
                src="/github.svg"
                alt="github icon"
                width={20}
                height={20}
                priority
              />
              <a href={repoLink.url} className={style.href}>
                {repoLink.name}
              </a>
            </Button>
          </Tilt>
          <Tilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <Button>
              <Image
                src="/earth.svg"
                alt="earth icon"
                width={20}
                height={20}
                priority
              />
              <a href={liveLink.url} className={style.href}>
                {liveLink.name}
              </a>
            </Button>
          </Tilt>
        </div>
        <Divider my="1" />
        <div>
          {langObj.map((l) => {
            return (
              <span className={style.lang} key={l + new Date().getTime()}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </span>
            );
          })}
        </div>
      </ProjectCardWrapper>
      <br />
    </>
  );
}

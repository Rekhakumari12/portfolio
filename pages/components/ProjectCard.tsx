import React from "react";
import { Button, Divider } from "../../styles/Wrapper.style";
import style from "../../styles/style.module.css";
import Image from "next/image";
import { ProjectCard as ProjectCardWrapper } from "../../styles/Wrapper.style";
import Tilt from "react-parallax-tilt";

type Props = {
  title: string;
  desc: string;
  repolink: { name: string; url: string };
  livelink: { name: string; url: string };
  langObj: string[];
  shadowColor: string;
};

type DataProps = {
  data: Props;
};

export default function ProjectCard({ data }: DataProps) {
  const { title, desc, repolink, livelink, langObj, shadowColor } = data;
  return (
    <>
      <ProjectCardWrapper shadowColor={shadowColor}>
        <div id="title">{title}</div>
        <p id="desc" dangerouslySetInnerHTML={{ __html: desc }} />
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
              <a href={repolink.url} className={style.href}>
                {repolink.name}
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
              <a href={livelink.url} className={style.href}>
                {livelink.name}
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

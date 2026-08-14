import React from "react";
import { Button, ProjectCard as ProjectCardWrapper } from "../styles/Wrapper.style";
import style from "../styles/style.module.css";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

type Props = {
  title: string;
  desc?: string;
  repoLink: { name: string; url: string };
  liveLink?: { name: string; url: string };
  langObj: string[];
  shadowColor: string;
};

type DataProps = {
  data: Props;
};

export default function ProjectCard({ data }: DataProps) {
  const { title, desc, repoLink, liveLink, langObj, shadowColor } = data;
  const hasLiveLink = Boolean(liveLink?.url) && liveLink?.url !== "#";
  return (
    <ProjectCardWrapper shadowColor={shadowColor}>
      <div className={style.projectInfo}>
        <div id="title">{title}</div>
      </div>
      <div className={style.projectActions}>
        {langObj.map((l, i) => (
          <span className={style.lang} key={l + i}>
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </span>
        ))}
      </div>
      {desc && (
        <div className={style.projectInfo}>
          <div id="desc" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      )}
      <div className={style.langRow}>
        <Tilt
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.15}
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
        {hasLiveLink && liveLink && (
          <Tilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.15}
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
        )}
      </div>
    </ProjectCardWrapper>
  );
}

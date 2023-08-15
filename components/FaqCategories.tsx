import Image from "next/image";
import { Button } from "../styles/Wrapper.style";
import style from "../styles/style.module.css";

type props = {
  handleClick: Function;
  active: "skill" | "general" | "education";
};
export default function FaqCategories({ handleClick, active }: props) {
  return (
    <div className={style.flex_space_between}>
      <Button
        padding="2rem"
        onClick={() => handleClick("skill")}
        className={`smallcard ${active === "skill" && "active"}`}
      >
        <Image
          src="/skills.svg"
          alt="skills Logo"
          width={50}
          height={50}
          priority
        />
        <p>Skills</p>
      </Button>
      <Button
        padding="2rem"
        onClick={() => handleClick("education")}
        className={`smallcard ${active === "education" && "active"}`}
      >
        <Image
          src="/education.svg"
          alt="education Logo"
          width={50}
          height={50}
          priority
        />
        <p>Education</p>
      </Button>
      <Button
        padding="2rem"
        onClick={() => handleClick("general")}
        className={`smallcard ${active === "general" && "active"}`}
      >
        <Image
          src="/keyboard.svg"
          alt="keyboard Logo"
          width={50}
          height={50}
          priority
        />
        <p>General</p>
      </Button>
    </div>
  );
}

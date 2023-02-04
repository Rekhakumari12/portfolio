import Image from "next/image";
import { Button } from "../../styles/Wrapper.style";
import style from "../../styles/style.module.css";

type props = {
  handleClick: Function;
};
export default function FaqCategories({ handleClick }: props) {
  return (
    <div className={style.flex_space_between}>
      <Button padding="2rem" onClick={() => handleClick("skill")}>
        <Image
          src="/skills.svg"
          alt="skills Logo"
          width={50}
          height={50}
          priority
        />
        <p>Skills</p>
      </Button>
      <Button padding="2rem" onClick={() => handleClick("education")}>
        <Image
          src="/education.svg"
          alt="education Logo"
          width={50}
          height={50}
          priority
        />
        <p>Education</p>
      </Button>
      <Button padding="2rem" onClick={() => handleClick("general")}>
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

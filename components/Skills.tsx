import React from "react";
import style from "../styles/style.module.css";
import { SKILLS } from "../constants/skills";

export default function Skills() {
  return (
    <div className={style.skills}>
      {SKILLS.map((group) => (
        <div className={style.skillGroup} key={group.category}>
          <h4 className={style.skillCategory}>{group.category}</h4>
          <ul className={style.skillTags}>
            {group.skills.map((skill) => (
              <li className={style.skillTag} key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

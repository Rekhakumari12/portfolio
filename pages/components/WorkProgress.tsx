import React from "react";
import style from "../../styles/style.module.css";

type Props = {
  role: string;
  tenure: string;
  location: string;
  id: number;
};

type arrayProps = {
  data: Props[];
};

export const WorkProgress = ({ data }: arrayProps): JSX.Element => {
  return (
    <ul>
      {data.map((w: Props) => {
        return (
          <li className={style.flex} key={w.role}>
            {w.id !== data.length && (
              <div className={style.vertical_line}></div>
            )}
            <div className={style.baseline_flex}>
              <div className={style.bullet}></div>
              <div>
                <span>{w.role}</span>
                <p className={style.span}>{w.location}</p>
              </div>
            </div>
            <p className={style.span}>{w.tenure}</p>
          </li>
        );
      })}
    </ul>
  );
};

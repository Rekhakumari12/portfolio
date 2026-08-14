import React from "react";
import style from "../styles/style.module.css";

type Props = {
  role: string;
  tenure: string;
  location: string;
  id: number;
};

type arrayProps = {
  data: Props[];
};

export default function WorkProgress({ data }: arrayProps): JSX.Element {
  return (
    <ul>
      {data?.map((w: Props) => {
        return (
          <li
            className={`${style.flex_space_between} ${style.work_row}`}
            key={w.role}
          >
            {w.id !== data.length && (
              <div className={style.vertical_line}></div>
            )}
            <div className={style.bullet}></div>
            <span>{w.role}</span>
            <p className={style.span}>{w.tenure}</p>
            <p className={`${style.span} ${style.exp_location}`}>
              {w.location}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

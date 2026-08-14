import React from "react";
import style from "../styles/style.module.css";
import { certifications } from "../constants/certifications";

export default function Certifications() {
  return (
    <div id="certifications">
      <h1 className={style.h1}>
        📜{" "}
        {"Certifications".split("").map((letter, id) => (
          <span key={letter + id.toString()}>{letter}</span>
        ))}
      </h1>
      <ul className={style.certList}>
        {certifications.map((cert) => (
          <li className={style.certItem} key={cert.title}>
            <div className={style.certMain}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style.certTitle}
              >
                {cert.title}
              </a>
              <span className={style.certIssuer}>{cert.issuer}</span>
            </div>
            <span className={style.certYear}>{cert.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

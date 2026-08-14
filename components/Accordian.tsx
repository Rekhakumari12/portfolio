import React, { useState } from "react";
type props = {
  title: string;
  children: string;
  links?: { name: string; url: string }[];
};
export default function Accordion({ title, children, links }: props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="box">
      <button
        className={`${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      <div className={`content ${!open ? "collapsed" : ""}`}>
        <p>{children}</p>
        {links?.map((l) => (
          <p key={l.name}>
            <a href={l.url} target="_blank" rel="noopener noreferrer">
              {l.name}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}

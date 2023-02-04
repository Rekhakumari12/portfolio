import { TypeScriptConfig } from "next/dist/server/config-shared";
import styled from "styled-components";

type Props = {
  /** my add margin to top and bottom */
  my?: string;
};

type Type = {
  /** to add shadow color on hover */
  shadowColor: string;
};

type ButtonPropsTypes = {
  /** to add custom padding */
  padding?: string;
};

export const Space = styled.div<Props>`
  margin: ${(props) => props.my + "rem 0" || ""};
  font-size: 1rem;
  p {
    margin-bottom: 2rem;
    text-align: justify;
  }
`;

export const SectionWrapper = styled.section`
  width: 800px;
  margin: 8rem auto;
  #projecttitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #input {
    width: 20rem;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    border: 1px solid var(--background-hover);
    outline: none;
    background-color: var(--btn-bg);
  }
  .search {
    position: relative;
    left: 25px;
    top: 4px;
  }
`;

export const MainWrapper = styled.main`
  position: "relative";
`;

export const ProjectCard = styled.div<Type>`
  border: 1px solid transparent;
  padding: 1.5rem;
  background: var(--btn-bg);
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  #title {
    font-size: 1.5rem !important;
  }
  #desc {
    margin: 1rem 0;
    text-align: start;
  }
  &:hover {
    box-shadow: 2px 2px 0px 0px
      ${(props) => props.shadowColor || "var(--main-orange)"};
    border: 1px solid var(--background-hover);
    background: var(--btn-hover-bg);
  }
  .list::marker {
    content: "✨ ";
    font-size: 0.5rem;
  }
  .list {
    color: var(--main-purple);
  }
`;
export const Button = styled.button<ButtonPropsTypes>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid var(--background-hover);
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  background: var(--btn-bg);
  font-family: var(--font-noto);
`;
export const Divider = styled.hr<Props>`
  margin: ${(props) => props.my + "rem 0" || "1rem 0"};
  background: var(--background-hover);
  border: 1px solid var(--background-hover);
`;

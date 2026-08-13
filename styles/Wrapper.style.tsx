import styled from 'styled-components'

export const Space = styled.div<{ my?: string | number }>`
  /* my: Add margin to top and bottom */
  margin: ${(props) => props.my + 'rem 0' || ''};
  font-size: 1rem;
  p {
    margin-bottom: 2rem;
    text-align: justify;
  }
`

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
  @media (max-width: 900px) {
    width: 80vw;
  }
`

export const MainWrapper = styled.main`
  position: relative;
`

export const ProjectCard = styled.div<{ shadowColor?: string }>`
  /* shadowColor: Add shadow color on hover */
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
    box-shadow: 2px 2px 0px 0px ${(props) => props.shadowColor || 'var(--main-orange)'};
    border: 1px solid var(--background-hover);
    background: var(--btn-hover-bg);
  }
  .list::marker {
    content: '✨ ';
    font-size: 0.5rem;
  }
  .list {
    color: var(--main-purple);
  }
`

export const Button = styled.button<{ padding?: string }>`
  /* padding: Add custom padding */
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid var(--background-hover);
  padding: ${(props) => props.padding || '0.5rem 1rem'};
  background: var(--btn-bg);
  font-family: var(--font-noto);

  &.smallcard {
    display: block;
    padding: 1rem 5rem;
    cursor: pointer;
    background: var(--btn-bg);
    border: 2px solid transparent;
    @media (max-width: 819px) {
      padding: 2rem;
    }
    @media (max-width: 481px) {
      padding: 1rem;
    }
  }
  &.smallcard:hover {
    background: var(--btn-hover-bg);
  }
  &.active {
    border: 2px solid var(--background-hover);
  }
`

export const Divider = styled.hr<{ my?: string | number }>`
  /* my: Add margin to top and bottom */
  margin: ${(props) => props.my + 'rem 0' || '1rem 0'};
  background: var(--background-hover);
  border: 1px solid var(--background-hover);
`

export const FAQWrapper = styled.div`
  button {
    background-color: transparent;
    width: 100%;
    padding: 1rem 0;
    text-align: start;
    border: none;
    border-bottom: 2px solid var(--background-hover);
    font-family: var(--font-noto);
    cursor: pointer;
    outline: none;
  }
  .content {
    max-height: 9999px;
    transition: all 0.6s ease-out;
    height: auto;
    text-align: justify;
  }
  .content.collapsed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.6s ease-out;
  }
  p {
    padding: 1rem 0;
    font-size: small;
    opacity: 0.7;
  }

  /* icon style */
  button::after {
    content: url('plus.svg');
    color: white;
    font-weight: bold;
    float: right;
    margin-left: 5px;
    width: 12px;
    height: 12px;
    transition: all 0.3s ease;
  }
  .open::after {
    content: url('plus.svg');
    transform: rotate(45deg);
    transition: transform 0.3s ease;
  }
`

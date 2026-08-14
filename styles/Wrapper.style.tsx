import styled from 'styled-components'

export const Space = styled.div<{ my?: string | number }>`
  /* my: Add margin to top and bottom */
  margin: ${(props) => props.my + 'rem 0' || ''};
  font-size: 1rem;
  p {
    margin-bottom: 2rem;
    text-align: left;
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
    border-radius: var(--radius-md);
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
  /* shadowColor: per-card accent used for the hover glow, links and bullets */
  --card-accent: ${(props) => props.shadowColor || 'var(--main-orange)'};
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 1rem + 2vw, 2.25rem);
  margin-bottom: 1.75rem;
  background: rgba(255, 255, 255, 0.025);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 30px -14px rgba(0, 0, 0, 0.6);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  #title {
    font-size: clamp(1.15rem, 0.95rem + 1vw, 1.5rem) !important;
    color: whitesmoke;
    letter-spacing: 0.01em;
    margin-bottom: 1rem;
  }
  #desc {
    margin: 0;
    color: var(--font-color);
    line-height: 1.7;
  }
  #desc ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    margin: 0;
  }
  #desc li {
    position: relative;
    padding-left: 1.4rem;
  }
  #desc li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.62em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--card-accent);
    box-shadow: 0 0 8px color-mix(in srgb, var(--card-accent) 70%, transparent);
  }
  #desc a {
    color: var(--card-accent);
    border-bottom: 1px solid color-mix(in srgb, var(--card-accent) 45%, transparent);
    transition: opacity 0.2s ease;
  }
  #desc a:hover {
    opacity: 0.72;
  }
  &:hover {
    transform: translateY(-4px);
    border-color: color-mix(in srgb, var(--card-accent) 55%, transparent);
    box-shadow: 0 20px 46px -20px color-mix(in srgb, var(--card-accent) 60%, transparent),
      0 8px 30px -14px rgba(0, 0, 0, 0.6);
  }
`

export const Button = styled.button<{ padding?: string }>`
  /* padding: Add custom padding */
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: ${(props) => props.padding || '0.55rem 1.1rem'};
  background: rgba(255, 255, 255, 0.03);
  font-family: var(--font-noto);
  font-size: 0.9rem;
  color: rgb(255 255 255 / 87%);
  cursor: pointer;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.28);
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-2px);
  }

  &.smallcard {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    padding: 1.75rem 1rem;
    cursor: pointer;
    color: #b4b4b4;
    background: var(--btn-bg);
    border: 2px solid transparent;
    transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
    @media (max-width: 481px) {
      padding: 1.25rem 0.5rem;
      gap: 0.6rem;
    }
  }
  &.smallcard svg {
    width: 44px;
    height: 44px;
    fill: currentColor;
  }
  &.smallcard:hover {
    background: var(--btn-hover-bg);
    border-color: var(--tab-accent);
    color: var(--tab-accent);
  }
  &.active {
    border: 2px solid var(--tab-accent);
    color: var(--tab-accent);
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
    font-size: clamp(0.9rem, 0.82rem + 0.4vw, 1.05rem);
    cursor: pointer;
    outline: none;
  }
  .content {
    max-height: 9999px;
    transition: all 0.6s ease-out;
    height: auto;
    text-align: left;
  }
  .content.collapsed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.6s ease-out;
  }
  p {
    padding: 1rem 0;
    font-size: clamp(0.8rem, 0.74rem + 0.3vw, 0.95rem);
    opacity: 0.7;
  }
  .content a {
    color: var(--main-blue);
    border-bottom: 1px solid var(--main-blue);
    opacity: 1;
  }
  .content a:hover {
    color: rgb(255 255 26 / 87%);
    border-bottom: 1px solid rgb(255 255 26 / 87%);
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

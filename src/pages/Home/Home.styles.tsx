import styled from "styled-components"

// --------------------------------------------------
// Navegation menu
export const Nav = styled.nav`
  position: fixed;
  width: 450px;
  min-height: 75px;
  background: #ffffff80;
  border-radius: 40px;
  z-index: 10;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    margin: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease, width 0.4s ease, border-radius 0.4s ease,
      transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      background: #fbbf24;
      transform: translateY(-4px);
      box-shadow: 0 6px 12px rgba(251, 191, 36, 0.35);
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    text-decoration: none;
    color: #1e293b;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    overflow: hidden;
    height: 60px;
    width: 100%;
    
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1e293b;
  }

  .label {
    white-space: nowrap;
    opacity: 0;
    max-width: 0;
    overflow: hidden;
    transform: translateX(-8px);
    transition: opacity 0.3s ease, max-width 0.35s ease, transform 0.35s ease;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .active {
    background: #fbbf24;
    width: 200px;
    border-radius: 30px;
    box-shadow: 0 6px 12px rgba(251, 191, 36, 0.35);
  }

  .active a {
    justify-content: flex-start;
    gap: 8px;
    padding: 0 16px;
    @media (max-width: 768px) {
      max-width: 60px;
    }
  }

  .active .label {
    opacity: 1;
    max-width: 150px;
    transform: translateX(0);

  }

  @media (max-width: 600px) {
    width: 70%;
    min-height: 60px;
    margin: 10px 10px 10px 10px;
    left: 0;
    right: 0;
  }
`;


// ...existing code...
export const FixedIcon = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  top: 85%;
  right: 40px;
  z-index: 15;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #ffecb3;
    transform: translateY(-2px);
  }

  /* tooltip (janela) — escondida por padrão, mostrada ao hover */
  .tooltip {
    position: absolute;
    width: 250px;
    height: 150px;
    right: calc(100% + 10px); /* posiciona à esquerda com gap */
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0,0,0,0.18);
    display: none;
    align-items: center;
    justify-content: center;
    padding: 6px;
    color: #1e293b;
    font-size: 0.85rem;
    text-align: center;
    pointer-events: none; /* evita interferir no hover do ícone */
  }

  &:hover .tooltip {
    display: flex;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;



// --------------------------------------------------
//Home section 
export const MainContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #1e293b;
    clip-path: polygon(0 0, 120% 0, 0 150%);
  }

  /* quando for tablet ou celular */
  @media (max-width: 768px) {
    background: #1e293b;

    &::before {
      clip-path: none; /* remove o corte diagonal */
    }
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(2rem, 4vw, 4rem);
  width: min(100%, 1200px);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 6rem) clamp(2rem, 6vw, 8rem);

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  max-width: 32rem;
`;

export const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1.5vw, 1rem);
  color: #e0e0e0;
  font-size: clamp(0.875rem, 2vw, 1rem);

  button {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: inherit;
    padding: clamp(0.375rem, 1.2vw, 0.55rem) clamp(0.75rem, 2vw, 1rem);
    border-radius: 9999px;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease, border 0.3s ease;

    &[aria-pressed="true"] {
      background: #fbbf24;
      color: #1e293b;
      border-color: #fbbf24;
      font-weight: 600;
    }

    &:hover {
      border-color: #fbbf24;
      color: #fbbf24;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const HomeTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #fbbf24;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;




export const HomeSubtitle = styled.h2`
  font-size: clamp(1.25rem, 3vw, 2rem);
  color: #e0e0e0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  font-weight: 400;
  margin: 0 0 4px 0; /* espaço bem pequeno abaixo */
`;

export const HomeSlogan = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: #e0e0e0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  font-weight: 300;
  line-height: 1.4;
  margin: 0; /* remove o espaço padrão superior/inferior */
`;

export const SocialMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1.25rem);

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #fbbf24;
    font-size: clamp(1rem, 2.2vw, 1.5rem);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffecb3;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: min(500px, 45%);
  height: auto;
  border-radius: 35%;
  border: 6px solid rgba(255, 255, 255, 0.8);
  filter: brightness(0.95) contrast(1.05);
  transition: transform 0.4s ease, filter 0.4s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1) contrast(1.1);
  }

  @media (max-width: 1024px) {
    width: min(360px, 60%);
  }

  @media (max-width: 600px) {
    width: min(280px, 70%);
  }
`;



// --------------------------------------------------
// About section 

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 48px 16px;
  min-height: 100vh;
  box-sizing: border-box;

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 40px;
    padding: 80px 32px;
  }
`;

export const RoundedImage = styled.img`
  width: min(300px, 25%);
  height: auto;
  border-radius: 50%;
  border: 6px solid #fbbf24;
  filter: brightness(0.95) contrast(1.05);
  transition: transform 0.4s ease, filter 0.4s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1) contrast(1.1);
  }

  @media (max-width: 1024px) {
    width: min(260px, 40%);
  }

  @media (max-width: 600px) {
    width: min(200px, 50%);
  }
`;

export const AboutTitle = styled.h2`
  margin: 0;
  font-size: 3.5rem;
  text-align: center;
  max-width: 680px;
  color: #1e293b;

  @media (min-width: 769px) {
    text-align: left;
  }
`;


// --------------------------------------------------
// Portifolio section 

export const PortifolioContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: rgba(130, 151, 184, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 40px 20px;
  box-sizing: border-box;
`;


export const ProjectsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  justify-items: center;
  grid-auto-rows: 1fr;
`;

export const PortifolioTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #fbbf24;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    margin-top: 25px;
   
  } 
`;


export const ProjectCard = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
  }

  h3 {
    margin: 16px 16px 8px;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    margin: 0 16px 24px;
    color: #555;
    font-size: 1rem;
    line-height: 1.5;
    flex-grow: 1;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #fbbf24;
    font-size: clamp(1rem, 2.2vw, 1.5rem);
    text-decoration: none;
    transition: color 0.3s ease;
    margin: 0 16px 16px;

    &:hover {
      color: #ffecb3;
    }
  } 
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

// --------------------------------------------------
// Time line

export const TimelineContainer = styled.section`
  background: #fbbf24;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 48px 16px;
  min-height: 100vh;
  box-sizing: border-box;

  @media (min-width: 769px) {
    gap: 40px;
    padding: 80px 32px;
  }
`;

export const TimelineTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #1e293b;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    margin-top: 25px;
   
  } 
`;

export const Timeline = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  margin: 20px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: #1e293b;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
    text-align: right;

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      right: -8px;
      width: 16px;
      height: 16px;
      background: #fbbf24;
      border-radius: 50%;
      border: 4px solid #1e293b;
    }
  }

  &:nth-child(even) {
    left: 50%;
    text-align: left;

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: -8px;
      width: 16px;
      height: 16px;
      background: #fbbf24;
      border-radius: 50%;
      border: 4px solid #1e293b;
    }
  }

  h3 {
    margin: 0 0 8px;
    font-size: 1.5rem;
    color: #1e293b;
  }

  p {
    margin: 0;
    color: #333;
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    text-align: left;
    padding: 20px 20px;

    &::before {
      left: -8px;
    }

    &:nth-child(odd),
    &:nth-child(even) {
      left: 0;
      text-align: left;

      &::before {
        left: -8px;
      }
    }
  }
`;


// --------------------------------------------------
// Rock and Roll section


export const RockContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 48px 16px;
  min-height: 100vh;
  box-sizing: border-box;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap; /* permite quebra de linha para filhos */
    gap: 40px;
    padding: 80px 32px;
  }
`;

export const RockTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #fbbf24;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    margin-top: 25px;
   
  } 
`;

export const RockDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #1e293b;
  text-align: center;
  max-width: 800px;
  margin: 0 20px 40px;

  @media (min-width: 769px) {
    text-align: left;
  }
`;

export const RockGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  justify-items: center;
  grid-auto-rows: 1fr;

  /* garante que o grid ocupe uma nova linha quando o pai usar row + wrap */
  flex: 0 0 100%;
  margin-top: 8px;

  @media (min-width: 769px) {
    margin-top: 24px;
  }
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
`;

// This container is needed to position the front and back side
export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

// Front side of the card
export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

// Back side of the card
export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);

  h1{
    color: #1e293b;
  }

  h2 {
    color: #fbbf24;
  }

  .bold{
    font-weight: 600;
  }
`;  




// --------------------------------------------------
// Footer section

export const Footer = styled.footer`
  width: 100%;
  min-height: 60px;
  background: #1e293b;
  display: flex;
  flex-direction: column; /* ← empilha os elementos */
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  color: #e0e0e0;
  font-size: clamp(0.875rem, 2vw, 1rem);
  text-align: center;
  gap: 4px; /* espaço entre o <p> e o <a> */

  a {
    color: #fbbf24;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffecb3;
    }
  }
`;
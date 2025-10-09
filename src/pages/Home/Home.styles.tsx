import styled from "styled-components"

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
  overflow: hidden;
  display: flex;
  align-items: center;
  }
`;

export const PortifolioTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #fbbf24;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
`;
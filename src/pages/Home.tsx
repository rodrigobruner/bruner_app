import styled from "styled-components"
import bruner_logo from "../assets/bruner_logo.png"
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

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
      clip-path: none;   /* remove o corte diagonal */
    }
  }
`;


const Content = styled.div`
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

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  max-width: 32rem;
`;

const HomeTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #fbbf24;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HomeSubtitle = styled.h2`
  font-size: clamp(1.25rem, 3vw, 2rem);
  color: #e0e0e0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  font-weight: 400;
`;

const SocialMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1.25rem);

  a {
    color: #fbbf24;
    font-size: clamp(1rem, 2.2vw, 1.5rem);
    transition: color 0.3s ease;
    text-decoration: none;

    &:hover {
      color: #ffecb3;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }

  display: flex;
  gap: 16px; /* espaço entre os links */
  
  a {
    display: flex;              /* ícone e texto lado a lado */
    align-items: center;        /* alinha verticalmente */
    gap: 8px;                   /* espaço entre ícone e texto */
    color: #fbbf24;
    font-size: 18px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd95b;
    }
  }
`;

const Image = styled.img`
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

export default function Home() {
  return (
    <MainContainer>
      <Content>
        <TextGroup>
          <HomeTitle>Rodrigo Bruner</HomeTitle>
          <HomeSubtitle>Full Stack Developer</HomeSubtitle>
          <SocialMenu>
            <a href="https://www.linkedin.com/in/rodrigobruner/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} color="#fbbf24" />LinkedIn</a>
            <a href="https://github.com/rodrigobruner" target="_blank" rel="noopener noreferrer">
                <FaGithubAlt size={28} color="#fbbf24" />GitHub</a>
          </SocialMenu>
        </TextGroup>
        <Image src={bruner_logo} alt="Bruner Avatar" />
      </Content>
    </MainContainer>
  )
}

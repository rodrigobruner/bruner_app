import { useTranslation } from "react-i18next"
import {
  MainContainer,
  AboutContainer,
  PortifolioContainer,
  Content,
  TextGroup,
  HomeTitle,
  AboutTitle,
  HomeSubtitle,
  SocialMenu,
  Image,
  RoundedImage,
  PortifolioTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage
} from "./Home.styles";

import { FaLinkedin, FaGithubAlt } from "react-icons/fa"
import bruner_logo from "../../assets/images/bruner_logo.png"
import bruner_rock from "../../assets/images/bruner_rock.png"
import LanguageSwitcher from "../../componets/LanguageSwitcher/LanguageSwitcher"



export default function Home() {

  const { t } = useTranslation()
  return (
    <>
      <MainContainer>
        <LanguageSwitcher />
        <Content>
          <TextGroup>
            <HomeTitle>{t("home.title")}</HomeTitle>
            <HomeSubtitle>{t("home.subtitle")}</HomeSubtitle>
            <SocialMenu aria-label={t("home.links.ariaLabel")}>
              <a href="https://www.linkedin.com/in/rodrigobruner/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} color="#fbbf24" />
                {t("home.links.linkedin")}
              </a>
              <a href="https://github.com/rodrigobruner" target="_blank" rel="noopener noreferrer">
                <FaGithubAlt size={28} color="#fbbf24" />
                {t("home.links.github")}
              </a>
            </SocialMenu>
          </TextGroup>
          <Image src={bruner_logo} alt="Bruner Avatar" />
        </Content>
      </MainContainer>
      <AboutContainer>
        <RoundedImage src={bruner_rock} alt="Bruner Avatar" />
        <AboutTitle>{t("home.about.title")}</AboutTitle>
      </AboutContainer>
      <PortifolioContainer>
        <PortifolioTitle>{t("home.portfolio.title")}</PortifolioTitle>
        <ProjectsGrid>
          <ProjectCard>
            <ProjectImage
              src="https://github.com/rodrigobruner/out_of_the_nest_android_app/raw/main/images/screen_recording.gif"
              alt={t("home.portfolio.projects.project1.title")}
            />
            <h3>{t("home.portfolio.projects.project1.title")}</h3>
            <p>{t("home.portfolio.projects.project1.description")}</p>
            <a href="https://github.com/rodrigobruner/out_of_the_nest_android_app/" target="_blank" rel="noopener noreferrer">
                <FaGithubAlt size={28} color="#fbbf24" />
                {t("home.portfolio.github")}
            </a>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              src="https://github.com/rodrigobruner/car-reservation-system/raw/main/screenshot.gif"
              alt={t("home.portfolio.projects.project2.title")}
            />
            <h3>{t("home.portfolio.projects.project2.title")}</h3>
            <p>{t("home.portfolio.projects.project2.description")}</p>
            <a href="https://github.com/rodrigobruner/car-reservation-system/" target="_blank" rel="noopener noreferrer">
                <FaGithubAlt size={28} color="#fbbf24" />
                {t("home.portfolio.github")}
            </a>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              src="https://github.com/rodrigobruner/cleverOwl/raw/main/screenshot.gif"
              alt={t("home.portfolio.projects.project3.title")}
            />
            <h3>{t("home.portfolio.projects.project3.title")}</h3>
            <p>{t("home.portfolio.projects.project3.description")}</p>
            <a href="https://github.com/rodrigobruner/cleverOwl/" target="_blank" rel="noopener noreferrer">
                <FaGithubAlt size={28} color="#fbbf24" />
                {t("home.portfolio.github")}
            </a>
          </ProjectCard>
        </ProjectsGrid>
      </PortifolioContainer>
    </>
  )
}

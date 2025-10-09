import { useTranslation } from "react-i18next"
import {
  MainContainer,
  Content,
  TextGroup,
  HomeTitle,
  HomeSubtitle,
  SocialMenu,
  Image
} from "./Home.styles";

import { FaLinkedin, FaGithubAlt } from "react-icons/fa"
import bruner_logo from "../../assets/images/bruner_logo.png"
import LanguageSwitcher from "../../componets/LanguageSwitcher/LanguageSwitcher"



export default function Home() {

  const { t } = useTranslation()
  return (
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
  )
}

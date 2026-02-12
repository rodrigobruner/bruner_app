import { useCallback, useEffect, useMemo, useState, type MouseEvent } from "react"
import { useTranslation } from "react-i18next"
import {
  Nav,
  FixedIcon,
  MainContainer,
  AboutContainer,
  PortifolioContainer,
  Content,
  TextGroup,
  HomeTitle,
  HomeSlogan,
  AboutTitle,
  HomeSubtitle,
  SocialMenu,
  Image,
  RoundedImage,
  PortifolioTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  // TimelineContainer,
  // TimelineTitle,
  // Timeline,
  // TimelineItem,
  RockContainer,
  RockTitle,
  RockDescription,
  RockGrid,
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
  Footer
} from "./Home.styles";

import { FaLinkedin, FaGithubAlt, FaHome, FaGuitar} from "react-icons/fa"
// import { FaTimeline } from "react-icons/fa6";
import { BsChatHeart, BsCodeSquare } from "react-icons/bs"

import bruner_logo from "../../assets/images/bruner_logo.png"
import bruner_rock from "../../assets/images/bruner_rock.png"
import rock_theoffspring_2025 from "../../assets/images/rock_theoffspring_2025.jpg"
import rock_acdc_2025 from "../../assets/images/rock_acdc_2025.png"
import rock_kiss_2023 from "../../assets/images/rock_kiss_2023.jpg"
import rock_scorpions_2023 from "../../assets/images/rock_scorpions_2023.png"
import rock_deep_purple_2017 from "../../assets/images/rock_deep_purple_2017.png"
import rock_massacration_2023 from "../../assets/images/rock_massacration_2023.png"
import rock_velhas_virgens_2024 from "../../assets/images/rock_velhas_virgens_2024.jpg"
import black_ribbon from "../../assets/images/black_ribbon.png"
import LanguageSwitcher from "../../componets/LanguageSwitcher/LanguageSwitcher"



export default function Home() {

  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState("home")

  const sections = useMemo(() => ([
    {
      id: "home",
      icon: <FaHome size={28} />,
      label: t("menu.home")
    },
    {
      id: "about",
      icon: <BsChatHeart size={28} />,
      label: t("menu.about")
    },
    {
      id: "portfolio",
      icon: <BsCodeSquare size={28} />,
      label: t("menu.portfolio")
    },
    /*
    {      
      id: "timeline",
      icon: <FaTimeline />,
      label: t("menu.timeline")
    },*/
    {
      id: "rock",
      icon: <FaGuitar size={28} />,
      label: t("menu.rock")
    }
  ]), [t])

  const handleNavClick = useCallback((event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault()
    setActiveSection(sectionId)

    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (mostVisible) {
          const targetId = mostVisible.target.id
          setActiveSection((current) => (current === targetId ? current : targetId))
        }
      },
      {
        root: null,
        threshold: [0.3, 0.55, 0.8],
        rootMargin: "-20% 0px -40% 0px"
      }
    )

    const observedElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    observedElements.forEach((element) => observer.observe(element))

    return () => {
      observedElements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [sections])

  return (
    <>
      <Nav>
        <ul>
          {sections.map(({ id, icon, label }) => (
            <li key={id} className={id === activeSection ? "active" : undefined}>
              <a href={`#${id}`} onClick={(event) => handleNavClick(event, id)}>
                <span className="icon">{icon}</span>
                <span className="label">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Nav>

      <FixedIcon>
        <a href="https://www.cbc.ca/news/canada/british-columbia/suspect-s-mother-victim-tumbler-ridge-mass-shooting-9.7085200" target="_blank">
          <img src={black_ribbon} alt="Black ribbon" style={{ width: '55px', height: '55px' }} />
        </a>
        <div className="tooltip">{t("tribute.message")}</div>
      </FixedIcon>
      
      <MainContainer id="home">
        <LanguageSwitcher />
        <Content>
          <TextGroup>
            <HomeTitle>{t("home.title")}</HomeTitle>
            <HomeSubtitle>{t("home.subtitle")}</HomeSubtitle>
            <HomeSlogan>{t("home.slogan")}</HomeSlogan>
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
      <AboutContainer id="about">
        <RoundedImage src={bruner_rock} alt="Bruner Avatar" />
        <AboutTitle>{t("home.about.title")}</AboutTitle>
      </AboutContainer>
      <PortifolioContainer id="portfolio">
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
      {/*
      <TimelineContainer id="timeline">
          <TimelineTitle>Timeline</TimelineTitle>
          <Timeline>
            <TimelineItem>
              <h3>Oct 2025</h3>
              <h4>Finished Mobile Solutions Development</h4>
              <h4>@ Conestoga</h4>
              <p>I finished my mobile solution developement course at Conestoga College.</p>
            </TimelineItem>
            <TimelineItem>
              <h3>Oct 2023 - Aug 2025</h3>
              <h4>Head of software development</h4>
              <h4>@ Videosoft</h4>
              <p>Led a team of developers in creating innovative mobile solutions. Oversaw the entire development process, from ideation to deployment.</p>
            </TimelineItem>
            <TimelineItem>
              <h3>Aug 2019 - Dec 2022</h3>
              <h4>Software Engineering Management</h4>
              <h4>@ Videosoft</h4>
              <p>Managed a team of software engineers and led projects to develop scalable web applications. Implemented best practices for software development and ensured timely delivery of high-quality products.</p>
            </TimelineItem>
          </Timeline>
      </TimelineContainer>
          */}
      <RockContainer id="rock">
        <RockTitle>Rock and Roll 🤘</RockTitle>
        <RockDescription>{t("home.rock.description")}</RockDescription>
        <RockGrid>
        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <img src={rock_theoffspring_2025} alt="Rock Image" style={{width: '100%', height: '100%', borderRadius: '10px'}} />
            </FlipCardFront>
            <FlipCardBack>
              <h1>The Offspring</h1>
              <h2>Supercharged 2025</h2>
              <p className="bold">Toronto, ON, Canada</p>
              <p style={{padding: '20px'}}>{t("home.rock.shows.theoffspring.description")}</p>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>

        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <img src={rock_acdc_2025} alt="Rock Image" style={{width: '100%', height: '100%', borderRadius: '10px'}} />
            </FlipCardFront>
            <FlipCardBack>
              <h1>AC/DC</h1>
              <h2>Power up Tour 2025</h2>
              <p className="bold">Cleveland, OH, USA</p>
              <p style={{padding: '20px'}}>{t("home.rock.shows.acdc.description")}</p>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>

        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <img src={rock_velhas_virgens_2024} alt="Rock Image" style={{width: '100%', height: '100%', borderRadius: '10px'}} />
            </FlipCardFront>
            <FlipCardBack>
              <h1>Velhas Virgens</h1>
              <h2>O bar me chama</h2>
              <p className="bold">Joinville, SC, Brazil</p>
              <p style={{padding: '20px'}}>{t("home.rock.shows.velhasvirgens.description")}</p>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>

        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <img src={rock_scorpions_2023} alt="Rock Image" style={{width: '100%', height: '100%', borderRadius: '10px'}} />
            </FlipCardFront>
            <FlipCardBack>
              <h1>Scorpions</h1>
              <h2>Rock Believer 2023</h2>
              <p className="bold">Florianópolis, SC, Brazil</p>
              <p style={{padding: '20px'}}>{t("home.rock.shows.scorpions.description")}</p>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>

        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <img src={rock_kiss_2023} alt="Rock Image" style={{width: '100%', height: '100%', borderRadius: '10px'}} />
            </FlipCardFront>
            <FlipCardBack>
              <h1>Kiss</h1>
              <h2>End of the road</h2>
              <p className="bold">Florianópolis, SC, Brazil</p>
              <p style={{padding: '20px'}}>{t("home.rock.shows.kiss.description")}</p>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>

        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <img src={rock_massacration_2023} alt="Rock Image" style={{width: '100%', height: '100%', borderRadius: '10px'}} />
            </FlipCardFront>
            <FlipCardBack>
              <h1>Massacration</h1>
              <h2>Metal is my life</h2>
              <p className="bold">Joinville, SC, Brazil</p>
              <p style={{padding: '20px'}}>{t("home.rock.shows.massacration.description")}</p>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>

        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <img src={rock_deep_purple_2017} alt="Rock Image" style={{width: '100%', height: '100%', borderRadius: '10px'}} />
            </FlipCardFront>
            <FlipCardBack>
              <h1>Deep Purple, Cheap Trick & Tesla</h1>
              <h2>Solid Rock Tour</h2>
              <p className="bold">Curitiba, PR, Brazil</p>
              <p style={{padding: '20px'}}>{t("home.rock.shows.deeppurple.description")}</p>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
        
        </RockGrid>
      </RockContainer>
      <Footer>
        <p>
          &copy; {new Date().getFullYear()} Rodrigo Bruner. {t("home.footer.rights")}
        </p>
        <SocialMenu>
          <a
            href="https://linkedin.com/in/rodrigobruner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} style={{ marginRight: "4px" }} /> 
            {t("home.footer.contact")}
          </a>
        </SocialMenu>
      </Footer>
    </>
  )
}

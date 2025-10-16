import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      menu: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        timeline: "Timeline",
        rock: "Rock",
      },
      home: {
        title: "Rodrigo Bruner",
        subtitle: "Full-Stack Developer",
        slogan: "Building meaningful software that connects tech, design & people",
        languageLabel: "Language",
        languageOptions: {
          en: "English",
          pt: "Portuguese",
        },
        links: {
          linkedin: "LinkedIn",
          github: "GitHub",
          twitter: "Twitter",
          ariaLabel: "Social media links",
        },
        about: {
          title: "Crafting digital solutions with the same passion as a guitar solo.",
        },
        portfolio: {
          title: "My Portfolio",
          github: "View on GitHub",
          projects: {
            project1: {
              title: "Out of the Nest",
              description: "Out of the Nest is a mobile application designed to help families find welcoming and accessible locations, including restaurants, parks, events, or pet-friendly places.",
            },
            project2: {
              title: "Vehicle Reservation System ",
              description: "A web application built with .NET C# and Razor Pages that allows users to create and manage vehicle reservations.",
            },
            project3: {
              title: "CleverOwl",
              description: "CleverOwl is an iOS app built with Swift, designed to help users organize their tasks in a simple and effective way.",
            },
          },
        },
        rock: {
          description: "Rock has always been an important part of my life. It's the soundtrack that inspires me, motivates me, and accompanies me in different moments. Whenever possible, I like to reconnect with that energy at concerts of the bands I enjoy; it's a way to recharge and live intense experiences that also drive me in my work as a developer.",
          shows: {
            theoffspring: {
              description: "Jimmy Eat World surprised in the opening, and The Offspring made the audience roar with hits, laughs, and an unforgettable tribute to Ozzy Osbourne, pure emotion!",
            },
            acdc: {
              description: "We traveled 9 hours from Waterloo to Cleveland to fulfill a dream. The Pretty Reckless set the stage on fire, and Angus Young made history with incredible solos, the best show of my life.",
            },
            velhasvirgens: {
              description: "The legendary Brazilian rock band energized the crowd with sharp humor and lyrics full of attitude; between laughs and red faces, no one was left indifferent.",
            },
            scorpions: {
              description: "I went without high expectations, but left impressed! Scorpions showed contagious energy and stage presence that made every second worthwhile.",
            },
            kiss: {
              description: "What a spectacle! On their latest tour, the band proved they still had plenty of gas left — pyrotechnics, energy, and a breathtaking stage presence from start to finish.",
            },
            massacration: {
              description: "Even with a big delay, the energy was not lacking! The band perfectly embodied the characters, and surrounded by friends, every minute turned into pure fun.",
            },
            deeppurple: {
              description: "Even without Lynyrd Skynyrd and ZZ Top, the festival was unforgettable. When Deep Purple played “Smoke on the Water,” the crowd sang in unison, it was epic!",
            }
          }
        },
        footer:{
          rights: "All rights reserved.",
          contact: "Connect with me on LinkedIn"
        }
      },
    },
  },
  pt: {
    translation: {
      menu: {
        home: "Início",
        about: "Sobre",
        portfolio: "Portfólio",
        timeline: "Linha do Tempo",
        rock: "Rock",
      },
      home: {
        title: "Rodrigo Bruner",
        subtitle: "Desenvolvedor Full-Stack",
        slogan: "Construindo softwares significativos que conectam tecnologia, design e pessoas",
        languageLabel: "Idioma",
        languageOptions: {
          en: "Inglês",
          pt: "Português",
        },
        links: {
          linkedin: "LinkedIn",
          github: "GitHub",
          twitter: "Twitter",
          ariaLabel: "Redes sociais",
        },
        about: {
          title: "Criando soluções digitais com a mesma paixão de um solo de guitarra.",
        },
        portfolio: {
          title: "Meu Portfólio",
          github: "Ver no GitHub",
          projects: {
            project1: {
              title: "Out of the Nest",
              description: "Out of the Nest é um aplicativo móvel projetado para ajudar famílias a encontrar locais acolhedores e acessíveis, incluindo restaurantes, parques, eventos ou lugares que aceitam animais de estimação.",
            },
            project2: {
              title: "Vehicle Reservation System ",
              description: "Uma aplicação web construída com .NET C# e Razor Pages que permite aos usuários criar e gerenciar reservas de veículos.",
            },
            project3: {
              title: "CleverOwl",
              description: "CleverOwl é um aplicativo iOS construído com Swift, projetado para ajudar os usuários a organizar suas tarefas de maneira simples e eficaz.",
            },
          },
        },
        rock: {
          description: "O rock sempre foi uma parte importante da minha vida. É a trilha sonora que me inspira, me motiva e me acompanha em diferentes momentos. Sempre que possível, gosto de me reencontrar com essa energia em shows das bandas que curto, é uma forma de me recarregar e viver experiências intensas que depois também me impulsionam no meu trabalho como desenvolvedor.",
          shows: {
            theoffspring: {
              description: "Jimmy Eat World surpreendeu na abertura, e o The Offspring fez o público vibrar com hits, risadas e uma homenagem inesquecível a Ozzy Osbourne, pura emoção!",
            },
            acdc: {
              description: "Viajamos 9h de Waterloo a Cleveland para realizar um sonho. The Pretty Reckless incendiou o palco, e Angus Young fez história com solos incríveis, o melhor show da minha vida.",
            },
            velhasvirgens: {
              description: "A lendária banda de rock brasileira levantou o público com humor afiado e letras cheias de atitude, entre risadas e caras vermelhas, ninguém ficou indiferente.",
            },
            scorpions: {
              description: "Fui sem grandes expectativas, mas saí impressionado! O Scorpions mostrou uma energia contagiante e uma presença de palco que fez cada segundo valer a pena.",
            },
            kiss: {
              description: "Que espetáculo! Na última turnê, a banda provou que ainda tinha fôlego de sobra — pirotecnia, energia e uma presença de palco arrebatadora do início ao fim.",
            },
            massacration: {
              description: "Mesmo com um grande atraso, a energia não faltou! A banda incorporou os personagens com perfeição e, cercado de amigos, cada minuto virou pura diversão.",
            },
            deeppurple: {
              description: "Mesmo sem Lynyrd Skynyrd e ZZ Top, o festival foi inesquecível. Quando o Deep Purple tocou “Smoke on the Water”, a multidão cantou em coro, foi épico!",
            }
          }
        },
        footer:{
          rights: "Todos os direitos reservados.",
          contact: "Conecte-se comigo no LinkedIn"
        }
      },
    },
  },
}

void i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "pt",
  supportedLngs: ["en", "pt"],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
  returnEmptyString: false,
})

export default i18n

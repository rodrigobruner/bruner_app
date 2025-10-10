import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      menu: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
      },
      home: {
        title: "Rodrigo Bruner",
        subtitle: "Full Stack Developer",
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
      },
    },
  },
  pt: {
    translation: {
      menu: {
        home: "Início",
        about: "Sobre",
        portfolio: "Portfólio",
      },
      home: {
        title: "Rodrigo Bruner",
        subtitle: "Desenvolvedor Full Stack",
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
          title: "My Portfolio",
          github: "View on GitHub",
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

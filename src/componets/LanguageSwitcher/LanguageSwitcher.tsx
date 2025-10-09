// components/LanguageSwitcher.tsx
import { useTranslation } from "react-i18next";
import * as S from "./LanguageSwitcher.styles";
import { Ca, Br } from 'react-flag-icons';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const language = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];

  const handleChangeLanguage = (lng: "en" | "pt") => {
    if (language !== lng) void i18n.changeLanguage(lng);
  };

  return (
    <S.Wrapper>
      <button
        type="button"
        onClick={() => handleChangeLanguage("en")}
        aria-pressed={language === "en"}
      >
        {<Ca></Ca>}
      </button>
      <button
        type="button"
        onClick={() => handleChangeLanguage("pt")}
        aria-pressed={language === "pt"}
      >
        {<Br></Br>}
      </button>
    </S.Wrapper>
  );
}

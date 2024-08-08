import i18next from "i18next";
import { useTranslation } from "react-i18next";

const App = () => {
  const currentLang = i18next.language;
  const languageChanger = (lang) => {
    i18next.changeLanguage(lang);
  };
  const { t } = useTranslation();
  console.log(currentLang);
  return (
    <>
      <h1>{t("hello_world")}</h1>
      <button
        onClick={() =>
          currentLang === "ru" ? languageChanger("uz") : languageChanger("ru")
        }
      >
        {currentLang === "ru" ? "O'zbek" : "Русский"}
      </button>
    </>
  );
};

export default App;

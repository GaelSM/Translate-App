import { useContext } from "react";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import { cardContex } from "../context/card";
import { InterchangeIcon } from "./Icons";

export default function Languages({ isFrom }) {

  const { fromLanguage, toLanguage , setFromLanguage, setToLanguage, interchangeLanguages } = useContext(cardContex)

  const language = isFrom ? fromLanguage : toLanguage

  const handleChange = (event) => {
    const language = event.target.value
    isFrom ? setFromLanguage(language) : setToLanguage(language)
  }
  
  return (
    <header className="languages">
      <form className="inputs">
        {
          isFrom && <label>
            Detect Language
            <input
              type="radio"
              className="language"
              value={AUTO_LANGUAGE}
              name="lang"
              checked={(AUTO_LANGUAGE === language ? "checked" : "")}
              onChange={handleChange}
            />
          </label>
        }

        {
          Object.entries(SUPPORTED_LANGUAGES).map(([key, text]) => (
            <label key={key}>
              {text}
              <input
                type="radio"
                className="language"
                value={key} name="lang"
                checked={(key === language ? "checked" : "")}
                onChange={handleChange}
              />
            </label>
          ))
        }
      </form>
      {
        !isFrom && <button className="icon" onClick={interchangeLanguages}>
          <InterchangeIcon />
        </button>
      }
    </header>
  )
}
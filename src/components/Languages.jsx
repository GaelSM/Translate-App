import { useContext } from "react";
import { SUPPORTED_LANGUAGES } from "@/constants";
import { cardContex } from "@context/card";
import { InterchangeIcon } from "@components/Icons";

export default function Languages({ isFrom }) {

  const { fromLanguage, toLanguage , setFromLanguage, setToLanguage, interchangeLanguages } = useContext(cardContex)

  const language = isFrom ? fromLanguage : toLanguage

  const handleChange = (event) => {
    const language = event.target.value
    if(isFrom && language === toLanguage || !isFrom && language === fromLanguage) return

    isFrom ? setFromLanguage(language) : setToLanguage(language)
  }
  
  return (
    <header className="languages">
      <form className="inputs">
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
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import { InterchangeIcon } from "./Icons";

export default function Languages({ type, language, setLanguage, interchangeLanguages }) {

  const handleChange = (event) => setLanguage(event.target.value)

  return (
    <header className="languages">
      <div className="inputs">
        {
          type === "from" && <label>
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
      </div>
      {
        type === "to" && <button className="icon" onClick={interchangeLanguages}>
          <InterchangeIcon />
        </button>
      }
    </header>
  )
}
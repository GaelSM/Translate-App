import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import { InterchangeIcon } from "./Icons";

export default function Languages({ type, selected, setLanguage }) {
  const handleChange = (event) => {
    setLanguage(event.target.value)
  }

  return (
    <header className="languages">
      <form onChange={handleChange}>
        {
          type === "from" && <label>
            Detect Language
            <input type="radio" defaultChecked={(AUTO_LANGUAGE === selected ? "checked" : "")} className="language" value={AUTO_LANGUAGE} name="lang"/>
          </label>
        }

        {
          Object.entries(SUPPORTED_LANGUAGES).map(([key, text]) => (
            <label key={key}>
              { text }
              <input type="radio" className="language" value={key} name="lang" defaultChecked={(key === selected ? "checked" : "")}/>
            </label>
          ))
        }
      </form>
      {
        type === "to" && <div className="interchange">
          <InterchangeIcon />
        </div>
      }
    </header>
  )
}
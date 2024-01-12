import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import { InterchangeIcon } from "./Icons";

export default function Languages({ type }) {
  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <header className="languages">
      <form onChange={handleChange}>
        {
          type === "from" && <label>
            Detect Language
            <input type="radio" className="language" value={AUTO_LANGUAGE} name="lang"/>
          </label>
        }

        {
          Object.entries(SUPPORTED_LANGUAGES).map(([key, text]) => (
            <label key={key}>
              { text }
              <input type="radio" className="language" value={key} name="lang"/>
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
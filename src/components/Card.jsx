import { ButtonIcon, CopyIcon, SpeakerIcon } from "./Icons"
import Languages from "./Languages"

export default function Card({ type, language, setLanguage, children, interchangeLanguages, handleTranslate }) {
  const isFrom = type === "from"
  const textLenght = type === "from" && children.props.value.length

  return (
    <div className={`card ${type}`}>
      <Languages type={type} language={language} setLanguage={setLanguage} interchangeLanguages={interchangeLanguages} />
      <main>
        {children}
        {isFrom && <div className="length"> {textLenght}/500 </div>}
        <div className="bottom">
          <div className="icons">
            <button className="icon">
              <SpeakerIcon />
            </button>
            <button className="icon">
              <CopyIcon />
            </button>
          </div>
          {isFrom && <button onClick={handleTranslate} className="translate">
            <ButtonIcon />
            Translate
          </button>}
        </div>
      </main>
    </div>
  )
}
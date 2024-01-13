import { ButtonIcon, CopyIcon, SpeakerIcon } from "./Icons"
import Languages from "./Languages"

export default function Card({ type, language, setLanguage, children, interchangeLanguages, handleTranslate}) {
  const isFrom = type === "from"
  const textLenght = type === "from" && children.props.value.length

  return (
    <div className="card">
      <Languages type={ type } language={ language } setLanguage={ setLanguage } interchangeLanguages={interchangeLanguages}/>
      <main className="text">
        { children }
        { isFrom && <div className="length"> { textLenght } / 500 </div> }
      </main>
      <footer>
        <div className="icons">
          <button className="icon">
            <CopyIcon />
          </button>
          <button className="icon">
            <SpeakerIcon />
          </button>
        </div>
        { isFrom && <button onClick={handleTranslate}>
          <ButtonIcon />
          Translate
        </button> }
      </footer>
    </div>
  )
}
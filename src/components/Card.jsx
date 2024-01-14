import { VOICE_FOR_LANGUAGE } from "../constants"
import { ButtonIcon, CopyIcon, SpeakerIcon } from "./Icons"
import Languages from "./Languages"

export default function Card({ type, language, setLanguage, children, interchangeLanguages, handleTranslate }) {
  const isFrom = type === "from"
  const textLenght = type === "from" && children.props.value.length

  const handleClipboard = () => {
    navigator.clipboard.writeText(children.props.value)
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(children.props.value)
    utterance.lang = VOICE_FOR_LANGUAGE[language]
    speechSynthesis.speak(utterance)
  }
 
  return (
    <div className={`card ${type}`}>
      <Languages type={type} language={language} setLanguage={setLanguage} interchangeLanguages={interchangeLanguages} />
      <main>
        {children}
        {isFrom && <div className="length"> {textLenght}/500 </div>}
        <div className="bottom">
          <div className="icons">
            <button className="icon" onClick={handleSpeak}>
              <SpeakerIcon />
            </button>
            <button className="icon" onClick={handleClipboard}>
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
import { ButtonIcon, CopyIcon, SpeakerIcon } from "./Icons"

export default function Bottom({ isFrom }) {

  /*const previousText = useRef(fromText)

  const handleTranslate = () => {
    if (previousText.current === fromText || fromLanguage === AUTO_LANGUAGE || fromText === "") return
    previousText.current = fromText

    fetch(`https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`)
      .then(res => res.json())
      .then(data => {
        setToText(data.responseData.translatedText)
      })
  }*/

  /*const handleClipboard = () => {
    navigator.clipboard.writeText()
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance()
    utterance.lang = VOICE_FOR_LANGUAGE[language]
    speechSynthesis.speak(utterance)
  }*/

  return (
    <div className="bottom">
      <div className="icons">
        <button className="icon">
          <SpeakerIcon />
        </button>
        <button className="icon">
          <CopyIcon />
        </button>
      </div>
      {
        isFrom && <button className="translate">
          <ButtonIcon />
          Translate
        </button>
      }
    </div>
  )
}

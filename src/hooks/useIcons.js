import { cardContex } from "../context/card"
import { VOICE_FOR_LANGUAGE } from "../constants"
import { useContext, useRef } from "react"

export function useIcons({ isFrom }) {
  const { fromText, toText ,fromLanguage, toLanguage, setToText } = useContext(cardContex)

  const previousState = useRef({ fromText, fromLanguage, toLanguage })

  const handleTranslate = () => {
    const newObj = { fromText, fromLanguage, toLanguage }
    if (JSON.stringify(newObj) === JSON.stringify(previousState.current) || fromText === "") return
    previousState.current = newObj

    fetch(`https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`)
      .then(res => res.json())
      .then(data => {
        setToText(data.responseData.translatedText)
      })
  }

  const handleClipboard = () => {
    const textToCopy = isFrom ? fromText : toText
    navigator.clipboard.writeText(textToCopy)
  }

  const handleSpeak = () => {
    const text = isFrom ? fromText : toText
    const language = isFrom ? fromLanguage : toLanguage
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = VOICE_FOR_LANGUAGE[language]
    speechSynthesis.speak(utterance)
  }

  return { handleClipboard, handleSpeak, handleTranslate}
}
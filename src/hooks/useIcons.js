import { cardContex } from "../context/card"
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from "../constants"
import { useContext, useRef } from "react"

export function useIcons({ isFrom }) {
  const { fromText, toText ,fromLanguage, toLanguage, setToText } = useContext(cardContex)

  const previousText = useRef(fromText)

  const handleTranslate = () => {
    console.log({previousText: previousText.current, fromText, result: previousText.current === fromText})
    if (previousText.current === fromText || fromLanguage === AUTO_LANGUAGE || fromText === "") return
    previousText.current = fromText

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
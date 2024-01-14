import { useRef } from "react"
import Card from "./components/Card"
import { useStore } from "./hooks/useStore"
import { AUTO_LANGUAGE } from "./constants"

export default function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    toText,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText, 
    setToText
  } = useStore()

  const previousText = useRef(fromText)

  const handleTranslate = () => {
    if(previousText.current === fromText || fromLanguage === AUTO_LANGUAGE || fromText === "") return
    previousText.current = fromText

    fetch(`https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`)
    .then(res => res.json())
    .then(data => {
      setToText(data.responseData.translatedText)
    })
  }

  return (
    <div className="app">
      <Card type="from" language={fromLanguage} setLanguage={setFromLanguage} handleTranslate={handleTranslate}>
        <textarea value={fromText} onChange={(event) => setFromText(event.target.value)} name="fromText"/>
      </Card>

      <Card type="to" language={toLanguage} setLanguage={setToLanguage} interchangeLanguages={interchangeLanguages}>
        <textarea value={toText} disabled name="toText"/>
      </Card>
    </div>
  )
}
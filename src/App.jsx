import { useRef } from "react"
import Card from "./components/Card"
import { useStore } from "./hooks/useStore"

export default function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    toText,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText
  } = useStore()

  const textToTranslate = useRef(fromText)

  const handleTranslate = () => {
    if(textToTranslate.current === fromText) return
    textToTranslate.current = fromText
  }

  return (
    <div className="app">
      <Card type="from" language={fromLanguage} setLanguage={setFromLanguage} handleTranslate={handleTranslate}>
        <textarea value={fromText} onChange={(event) => setFromText(event.target.value)}/>
      </Card>

      <Card type="to" language={toLanguage} setLanguage={setToLanguage} interchangeLanguages={interchangeLanguages}>
        <textarea defaultValue={toText} disabled />
      </Card>
    </div>
  )
}
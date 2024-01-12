import Card from "./components/Card"
import { useStore } from "./hooks/useStore"


export default function App() {
  const { fromLanguage, toLanguage, fromText, toText, setFromLanguage, setToLanguage, setFromText } = useStore()

  return (
    <div className="app">
      <Card type="from" selected={fromLanguage} setLanguage={setFromLanguage} text={fromText}>
        <textarea value={fromText} onChange={(event) => setFromText(event.target.value)} />
      </Card>

      <Card type="to" selected={toLanguage} setLanguage={setToLanguage} text={fromText}>
        <textarea defaultValue={toText} />
      </Card>
    </div>
  )
}
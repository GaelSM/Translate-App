import { useStore } from "./hooks/useStore"
import Languages from "./components/Languages";

export default function App() {
  const { fromLanguage, toLanguage, fromText, toText, setFromLanguage, setToLanguage, setFromText } = useStore()

  return (
    <div className="app">
      <div className="card">
        <Languages type="from" selected={fromLanguage} setLanguage={setFromLanguage} />
        <textarea value={fromText} onChange={(event) => setFromText(event.target.value)}>
        </textarea>
      </div>
      <div className="card">
        <Languages type="to" selected={toLanguage} setLanguage={setToLanguage} />
        <textarea value={toText} disabled>
        </textarea>
      </div>
    </div>
  )
}
import Languages from "./Languages"
import { useStore } from "../hooks/useStore"
import Bottom from "./Bottom"

export default function Card({ type }) {

  const { fromText, toText, setFromText } = useStore()

  const isFrom = type === "from"
  const value = isFrom ? fromText : toText

  const handleOnChange = (event) => {
    if(!isFrom) return
    setFromText(event.target.value)
  }
 
  return (
    <div className={`card ${type}`}>
      <Languages type={type} />
      <main>
        <textarea value={value} onChange={handleOnChange} disabled={type === "to"}/>
        {
          isFrom && <div className="length"> {fromText.length}/500 </div>
        }
        <Bottom isFrom={isFrom} />
      </main>
    </div>
  )
}
import Languages from "./Languages"
import Bottom from "./Bottom"
import { useContext } from "react"
import { cardContex } from "../context/card"

export default function Card({ type }) {

  const { fromText, toText, setFromText } = useContext(cardContex)

  const isFrom = type === "from"
  const value = isFrom ? fromText : toText

  const handleOnChange = (event) => {
    if(!isFrom) return
    setFromText(event.target.value)
  }
 
  return (
    <div className={`card ${type}`}>
      <Languages isFrom={isFrom} />
      <main>
        <textarea value={value} onChange={handleOnChange} disabled={type === "to"} name={type + "-textarea"}/>
        {
          isFrom && <div className="length"> {fromText.length}/500 </div>
        }
        <Bottom isFrom={isFrom} />
      </main>
    </div>
  )
}
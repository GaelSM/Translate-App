import { CopyIcon, SpeakerIcon } from "./Icons"
import Languages from "./Languages"

export default function Card({ type, selected, setLanguage, children }) {
  const isFrom = type === "from"
  return (
    <div className="card">
      <Languages type={type} selected={selected} setLanguage={setLanguage} />
      <main className="text">
        {children}
        {
          isFrom && <div className="length"> {children.props.value.length} / 500 </div>
        }
      </main>
      <footer>
        <div className="icons">
          <div className="icon">
            <CopyIcon />
          </div>
          <div className="icon">
            <SpeakerIcon />
          </div>
        </div>
        {
          isFrom && <button> Translate </button>
        }
      </footer>
    </div>
  )
}
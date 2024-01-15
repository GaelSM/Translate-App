import { useIcons } from "@hooks/useIcons"
import { ButtonIcon, CopyIcon, SpeakerIcon } from "@components/Icons"

export default function Bottom({ isFrom }) {

  const { handleClipboard, handleSpeak, handleTranslate } = useIcons({ isFrom })

  return (
    <div className="bottom">
      <div className="icons">
        <button className="icon" onClick={handleSpeak}>
          <SpeakerIcon />
        </button>
        <button className="icon" onClick={handleClipboard}>
          <CopyIcon />
        </button>
      </div>
      {
        isFrom && <button className="translate" onClick={handleTranslate}>
          <ButtonIcon />
          Translate
        </button>
      }
    </div>
  )
}

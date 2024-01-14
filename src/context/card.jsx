import { createContext } from "react";
import { useStore } from "../hooks/useStore";

export const cardContex = createContext()

export function CardContexProvider({ children }) {
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

  return (
    <cardContex.Provider value={{
      fromLanguage,
      toLanguage,
      fromText,
      toText,
      interchangeLanguages,
      setFromLanguage,
      setToLanguage,
      setFromText, 
      setToText
    }}>
      { children }
    </cardContex.Provider>
  )
}
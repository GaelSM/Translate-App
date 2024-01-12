import { useReducer } from "react"

const initialState = {
  fromLanguage: "en",
  toLanguage: "fr",
  fromText: "",
  toText: "",
  loading: false
}

function reducer (state, action) {
  const { type } = action
  console.log(type)
}

export function useStore() {
  const [{ fromLanguage, toLanguage, fromText, toText, loading }, dispatch] = useReducer(initialState, reducer)

  const interchangeLanguages = () => dispatch({ type: "INTERCHANGE_LANGUAGES"})

  return {
    fromLanguage,
    toLanguage,
    fromText,
    toText,
    loading,
    interchangeLanguages
  }
}
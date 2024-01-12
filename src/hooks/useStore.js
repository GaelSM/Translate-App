import { useReducer } from "react"

const initialState = {
  fromLanguage: "en",
  toLanguage: "fr",
  fromText: "Hello, how are you?",
  toText: "Bonjour, comment allez-vous ?",
  loading: false
}

function reducer (state, action) {
  const { type } = action

  if(type === "SET_FROM_LANGUAGE") {
    if(state.fromLanguage === action.payload) return state

    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if(type === "SET_TO_LANGUAGE") {
    if(state.toLanguage === action.payload) return state

    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if(type === "SET_FROM_TEXT") {
    console.log(action.payload)
    return {
      ...state,
      fromText: action.payload
    }
  }
}

export function useStore() {
  const [{ fromLanguage, toLanguage, fromText, toText, loading }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => dispatch({ type: "INTERCHANGE_LANGUAGES"})

  const setFromLanguage = (payload) => dispatch({ type: "SET_FROM_LANGUAGE"}, payload)

  const setToLanguage = (payload) => dispatch({ type: "SET_TO_LANGUAGE"}, payload)

  const setFromText = (payload) => dispatch({ type: "SET_FROM_TEXT", payload})

  return {
    fromLanguage,
    toLanguage,
    fromText,
    toText,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText
  }
}
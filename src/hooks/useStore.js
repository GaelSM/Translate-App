import { useReducer } from "react"
import { AUTO_LANGUAGE } from "../constants"

const initialState = {
  fromLanguage: "en",
  toLanguage: "fr",
  fromText: "Hello, how are you?",
  toText: "Bonjour, comment allez-vous ?",
  loading: false
}

function reducer (state, action) {
  const { type } = action

  if(type === "INTERCHANGE_LANGUAGES") {
    if(state.fromLanguage === AUTO_LANGUAGE || state.toLanguage === state.fromLanguage) return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

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
    if(action.payload.length > 500) return state
    
    return {
      ...state,
      fromText: action.payload
    }
  }
}

export function useStore() {
  const [{ fromLanguage, toLanguage, fromText, toText, loading }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => dispatch({ type: "INTERCHANGE_LANGUAGES"})

  const setFromLanguage = (payload) => dispatch({ type: "SET_FROM_LANGUAGE", payload})

  const setToLanguage = (payload) => dispatch({ type: "SET_TO_LANGUAGE", payload})

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
import { createContext } from "react"

export const StateContext = createContext()

export const useStateContext = () => useContext(StateContext)

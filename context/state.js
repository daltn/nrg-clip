import { createContext, useContext, useState } from 'react'

const NrgContext = createContext()

export function NrgWrapper({ children }) {
  const [user, setUser] = useState(null)

  return (
    <NrgContext.Provider value={{ user, setUser }}>
      {children}
    </NrgContext.Provider>
  )
}

export function useNrgContext() {
  return useContext(NrgContext)
}

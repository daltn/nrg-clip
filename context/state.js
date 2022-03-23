import { createContext, useContext, useState } from 'react'

const NrgContext = createContext()

export function NrgWrapper({ children }) {
  const [user, setUser] = useState('')
  const [userData, setUserData] = useState({})

  return (
    <NrgContext.Provider value={{ user, setUser, userData, setUserData }}>
      {children}
    </NrgContext.Provider>
  )
}

export function useNrgContext() {
  return useContext(NrgContext)
}

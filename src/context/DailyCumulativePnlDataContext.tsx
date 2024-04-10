import React, { createContext, ReactNode, useContext } from 'react'
import useDailyCumulativePnlData from 'hooks/useDailyCumulativePnlData'

// Define the context
const DailyCumulativePnlDataContext = createContext<ReturnType<typeof useDailyCumulativePnlData> | null>(null)

interface ProviderProps {
  children: ReactNode
}

export const DailyCumulativePnlDataContextProvider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <DailyCumulativePnlDataContext.Provider value={useDailyCumulativePnlData()}>
      {children}
    </DailyCumulativePnlDataContext.Provider>
  )
}

export const useDailyCumulativePnlDataContext = () => {
  const context = useContext(DailyCumulativePnlDataContext)
  if (context === null) {
    throw new Error('DailyCumulativePnlDataContext must be used within a DepositsContextProvider')
  }
  return context
}

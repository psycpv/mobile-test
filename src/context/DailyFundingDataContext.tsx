import React, { createContext, ReactNode, useContext } from 'react'
import useDailyFundingData from 'hooks/useDailyFundingData'

// Define the context
const DailyFundingDataContext = createContext<ReturnType<typeof useDailyFundingData> | null>(null)

interface ProviderProps {
  children: ReactNode
}

export const DailyFundingDataContextProvider: React.FC<ProviderProps> = ({ children }) => {
  return <DailyFundingDataContext.Provider value={useDailyFundingData()}>{children}</DailyFundingDataContext.Provider>
}

export const useDailyFundingDataContext = () => {
  const context = useContext(DailyFundingDataContext)
  if (context === null) {
    throw new Error('DailyFundingDataContext must be used within a DepositsContextProvider')
  }
  return context
}

import React, { createContext, ReactNode, useContext } from 'react'
import useTimeRangeFilter from 'hooks/useTimeRangeFilter'

// Define the context
const TimeRangeFilterContext = createContext<ReturnType<typeof useTimeRangeFilter> | null>(null)

interface ProviderProps {
  children: ReactNode
}

// Define the Provider component
export const TimeRangeFilterContextProvider: React.FC<ProviderProps> = ({ children }) => {
  return <TimeRangeFilterContext.Provider value={useTimeRangeFilter()}>{children}</TimeRangeFilterContext.Provider>
}

export const useTimeRangeFilterContext = () => {
  const context = useContext(TimeRangeFilterContext)
  if (context === null) {
    throw new Error('TimeRangeFilterContext must be used within a DepositsContextProvider')
  }
  return context
}

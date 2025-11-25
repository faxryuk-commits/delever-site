import React, { createContext, useContext, useState } from 'react'

type Region = 'uz' | 'kz' | 'ru' | 'ae'

interface RegionContextType {
  region: Region
  setRegion: (region: Region) => void
}

const RegionContext = createContext<RegionContextType | undefined>(undefined)

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegion] = useState<Region>('uz')

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  )
}

export function useRegion() {
  const context = useContext(RegionContext)
  if (!context) {
    throw new Error('useRegion must be used within RegionProvider')
  }
  return context
}


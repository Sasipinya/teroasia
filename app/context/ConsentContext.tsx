
'use client'

import { createContext, useContext, useState } from 'react'

type Consent = {
  advertising: boolean
  analytics: boolean
}

const ConsentContext = createContext<{
  consent: Consent
  setConsent: (c: Consent) => void
}>({
  consent: { advertising: false, analytics: false },
  setConsent: () => {}
})

export const ConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState<Consent>({
    advertising: true,
    analytics: true
  })
  

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  )
}

export const useConsent = () => useContext(ConsentContext)

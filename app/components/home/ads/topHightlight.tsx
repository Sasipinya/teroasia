
'use client'

import { FC, useEffect, useState } from 'react'
import { GPT } from '../../GPT'
import { SizeMappingArray } from '@/app/types/global'

const TopHighightAdvertising: FC = () => {
  const [adSize, setAdSize] = useState<Array<[number, number] | string>>([
    [728, 90],
    "fluid"
  ])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setAdSize([
          [1120, 300],
          [970, 250],
          [970, 90],
          [728, 90],
          "fluid"
        ])
      } else if (window.innerWidth >= 992) {
        setAdSize([
          [970, 250],
          [970, 90],
          [728, 90],
          "fluid"
        ])
      } else {
        setAdSize([[728, 90], "fluid"])
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="container mx-auto">
    <div className="w-full max-w-[1200px] mx-auto px-2">
      <div className="mx-2">
        <div className="desktop_ads">
          <div
            id="div-gpt-ad-1676441812031-0"
            className="min-w-[728px] min-h-[90px] "
          >
            <GPT
              adUnitPath="/33368840/TA_Desktop_Homepage_Billboard"
              slotSize={adSize as SizeMappingArray}
              renderWhenViewable={true}
              idAds="div-gpt-ad-1676441812031-0"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TopHighightAdvertising
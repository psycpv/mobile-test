import dynamic from 'next/dynamic'
import { useState } from 'react'
import Script from 'next/script'

import { ChartingLibraryWidgetOptions, ResolutionString } from '../../../../public/static/charting_library'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
  interval: '5' as ResolutionString,
  library_path: '/static/charting_library/',
  locale: 'en',
  charts_storage_url: 'https://info.deus.finance/tradingview',
  charts_storage_api_version: '1.1',
  client_id: 'based',
  fullscreen: false,
  autosize: true,
}

const TVChartContainer = dynamic<Partial<ChartingLibraryWidgetOptions>>(
  () => import('components/TVChartContainer').then((mod) => mod.TVChartContainer),
  {
    ssr: false,
  }
)

export default function CustomChart({ symbol }: { symbol: string }) {
  const [isScriptReady, setIsScriptReady] = useState(false)
  const { account } = useActiveWeb3React()
  const revisedSymbol = symbol.replace('/', '')
  return (
    <>
      <Script
        src="/static/datafeeds/udf/dist/bundle.js"
        strategy="lazyOnload"
        onReady={() => {
          setIsScriptReady(true)
        }}
      />
      {isScriptReady && <TVChartContainer {...defaultWidgetProps} user_id={account} symbol={revisedSymbol} />}
    </>
  )
}

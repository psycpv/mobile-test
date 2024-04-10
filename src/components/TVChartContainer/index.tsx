import styles from './index.module.css'
import { useEffect, useRef, useState } from 'react'
import {
  ChartingLibraryWidgetOptions,
  IChartingLibraryWidget,
  LanguageCode,
  ResolutionString,
  SaveLoadChartRecord,
  widget,
} from '../../../public/static/charting_library'
import Datafeed from 'lib/tradingview/binanceDatafeed/datafeed'
import { chartOverrides } from './constant'
import { makeHttpRequest } from 'utils/http'
import { Loader } from 'components/Icons'
import styled from 'styled-components'
import { RowCenter } from 'components/Row'
import { useRouter } from 'next/router'

const LoaderWrapper = styled(RowCenter)`
  align-items: flex-end;
  height: 100%;
`

type LoadChartType = {
  id: string
  name: string
  timestamp: number
  symbol: string
  resolution: string
}

export const SUPPORTED_RESOLUTIONS = {
  1: '1m',
  5: '5m',
  15: '15m',
  60: '1h',
  240: '4h',
  '1D': '1d',
  '1W': '1w',
  '1M': '1M',
}

export const TVChartContainer = (props: Partial<ChartingLibraryWidgetOptions>) => {
  const chartContainerRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const tvChartRef = useRef<IChartingLibraryWidget>()
  const [chartLayoutLoaded, setChartLayoutLoaded] = useState<undefined | string>(undefined)
  const [chartDataLoading, setChartDataLoading] = useState(true)
  const router = useRouter()
  const url =
    props.charts_storage_url +
    '/' +
    props.charts_storage_api_version +
    '/charts' +
    '?client=' +
    props.client_id +
    '&user=' +
    props.user_id

  async function loadChartList() {
    const { status, data } = await makeHttpRequest(url)
    if (status !== 'ok') return undefined
    const targetSymbol = props.symbol?.split(':')[1]
    const result = (data as LoadChartType[]).filter((item) => item.symbol === targetSymbol)

    if (result.length > 0 && tvChartRef.current) {
      const { id, name } = result[0]
      tvChartRef.current.onChartReady(() => {
        tvChartRef.current?.loadChartFromServer({ id, name } as SaveLoadChartRecord)
      })
      setChartLayoutLoaded(id)
    } else {
      if (chartLayoutLoaded) {
        try {
          tvChartRef.current?.loadChartFromServer({ id: '' } as SaveLoadChartRecord)
        } catch (error) {
          console.log('error Load reset')
        }
      }
    }
  }
  useEffect(() => {
    let timer: null | NodeJS.Timeout = null
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: props.symbol,
      theme: 'Dark',
      datafeed: Datafeed,
      interval: props.interval as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale as LanguageCode,
      disabled_features: ['use_localstorage_for_settings', 'header_symbol_search'],
      enabled_features: ['study_templates'],
      loading_screen: { backgroundColor: '#16182e', foregroundColor: '#2962ff' },
      custom_css_url: '/tradingview-chart.css',
      charts_storage_url: props.charts_storage_url,
      charts_storage_api_version: props.charts_storage_api_version,
      load_last_chart: true,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize,
      overrides: chartOverrides,
    }

    tvChartRef.current = new widget(widgetOptions)

    tvChartRef.current?.onChartReady(function () {
      //loadChartList()
      tvChartRef.current
        ?.activeChart()
        .onSymbolChanged()
        .subscribe(null, ((symbolObject: any) => {
          router.push(`/trade/${symbolObject.name}`)
        }) as any)
      tvChartRef.current?.activeChart().dataReady(() => {
        timer = setTimeout(() => {
          setChartDataLoading(false)
        }, 2000)
      })
    })
    return () => {
      if (timer) clearTimeout(timer)
      tvChartRef.current?.remove()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (tvChartRef.current && props.symbol && !chartDataLoading) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      tvChartRef.current?.setSymbol(props.symbol, '240' as ResolutionString, () => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.symbol])

  return (
    <>
      {chartDataLoading && (
        <LoaderWrapper>
          <Loader size="50px" />
        </LoaderWrapper>
      )}
      <div
        ref={chartContainerRef}
        className={styles.TVChartContainer}
        style={{ visibility: !chartDataLoading ? 'visible' : 'hidden' }}
      />
    </>
  )
}

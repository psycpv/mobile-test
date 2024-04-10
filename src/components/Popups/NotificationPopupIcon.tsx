import styled from 'styled-components'

import Image from 'next/image'
import USDC_ICON from '/public/static/images/tokens/USDC.svg'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { Row } from 'components/Row'

const Wrapper = styled(Row)`
  gap: 2px;
  & > * {
    &:first-child {
      margin-right: -10px;
      z-index: 10;
    }
  }
  align-items: center;
  justify-content: center;
`

const ImageWrapper = styled.div`
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
`

export default function NotificationPopupIcon({ symbol }: { symbol?: string }) {
  const token1 = useCurrencyLogo(symbol)

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={token1} width={20} height={20} alt={`icon`} />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={USDC_ICON} width={20} height={20} alt={`icon`} />
      </ImageWrapper>
    </Wrapper>
  )
}

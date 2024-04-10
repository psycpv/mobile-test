import Image from 'next/image'
import styled from 'styled-components'
import AnimationLoader from 'components/Animation/AnimationLoader'
import { useIsMobile } from 'lib/hooks/useWindowSize'

type IconSize = {
  height?: string
  width?: string
}

type TitlePosition = {
  left?: string
  right?: string
  bottom?: string
  top?: string
}

const Container = styled.div`
  height: 150px;
  width: 100%;
  z-index: 1;
  background: ${({ theme }) => theme.color2};
  position: relative;
  margin-top: 12px;
  margin-bottom: 104px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  background: none;
  margin-bottom:-40px;
  z-index: 0
  `}
`

const BackgroundWrapper = styled.div`
  position: absolute;
  right: 0;
`

const IconWrapper = styled.div`
  position: absolute;
`

const AnimationWrapper = styled.div`
  position: absolute;
  z-index: 2;
`

const TitleContainer = styled.div`
  height: 150px;

  div {
    top: 5px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
   height: 100%;
   top:15px
  `}
`

const HeaderTextWrapper = styled.div<{
  titlePosition?: TitlePosition
  isHeader?: boolean
}>`
  padding: ${() => (useIsMobile() ? '12px 2px' : '12px 0px')};
  font-weight: 600;
  position: absolute;
  color: white;
  top: ${({ titlePosition }) => titlePosition?.top ?? undefined};
  right: ${({ titlePosition }) => titlePosition?.right ?? undefined};
  left: ${({ titlePosition }) => titlePosition?.left ?? '11.5%'};
  bottom: ${({ titlePosition }) => titlePosition?.bottom ?? '28px'};
  margin-left: ${() => (useIsMobile() ? '33%' : '220px')};
  transform: translateX(-50%);
  ${({ isHeader, theme }) =>
    !isHeader &&
    theme.mediaWidth.upToMedium`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    transform: translateX(0);
    margin-left: 0 ;
    left: 0
  `}
`

const TitleWrapper = styled.div`
  background: linear-gradient(183deg, #f9a2f3 28.97%, #fff 73.54%);
  font-family: Londrina Solid;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DescriptionWrapper = styled.div<{ isSectionTitle?: boolean }>`
  font-size: ${({ isSectionTitle }) => (isSectionTitle ? '15px' : '20px')};
  color: ${({ theme, isSectionTitle }) => (isSectionTitle ? theme.coolGrey : theme.tempPink)};
`

export function Title({
  title,
  subtitle,
  description,
  isSectionTitle,
  titlePosition,
  titleFontSize,
  subTitleFontSize,
  isHeader = true,
}: {
  title: string
  subtitle?: string
  description?: string
  isSectionTitle?: boolean
  titlePosition?: TitlePosition
  titleFontSize?: string
  style?: React.CSSProperties
  subTitleFontSize?: string
  isHeader?: boolean
}) {
  return (
    <HeaderTextWrapper isHeader={isHeader} titlePosition={titlePosition}>
      <TitleWrapper style={{ fontSize: `${titleFontSize}` }}>{title}</TitleWrapper>
      <DescriptionWrapper style={{ fontSize: `${subTitleFontSize}` }} isSectionTitle={isSectionTitle}>
        {subtitle}
      </DescriptionWrapper>
      {description && <DescriptionWrapper>${description}</DescriptionWrapper>}
    </HeaderTextWrapper>
  )
}

export default function Header({
  backgroundImg,
  icon,
  animation,
  animationStyle,
  title,
  subtitle,
  description,
  titleFontSize,
  titlePosition,
  subTitleFontSize,
  iconStyle = {},
  iconSize = { width: '496', height: '242' },
}: {
  backgroundImg: string
  icon?: string
  animation?: string
  animationStyle?: React.CSSProperties
  title: string
  subtitle: string
  description?: string
  titleFontSize?: string
  titlePosition?: TitlePosition
  subTitleFontSize?: string
  iconStyle?: React.CSSProperties
  iconSize?: IconSize
}) {
  return (
    <Container>
      {backgroundImg && (
        <BackgroundWrapper>
          <Image src={backgroundImg} alt={'background'} height={150} width={817} />
        </BackgroundWrapper>
      )}
      {!animation ? (
        <IconWrapper style={iconStyle}>
          ${icon && <Image src={icon} alt={'icon'} width={iconSize.width} height={iconSize.height} />}
        </IconWrapper>
      ) : (
        <AnimationWrapper style={iconStyle}>
          <AnimationLoader name={animation} style={animationStyle}></AnimationLoader>
        </AnimationWrapper>
      )}
      <TitleContainer>
        <Title
          titlePosition={titlePosition}
          subTitleFontSize={subTitleFontSize}
          titleFontSize={titleFontSize}
          title={title}
          subtitle={subtitle}
          description={description}
        />
      </TitleContainer>
    </Container>
  )
}

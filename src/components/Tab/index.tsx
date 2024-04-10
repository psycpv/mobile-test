import styled from 'styled-components'
import { RowCenter, RowStart } from 'components/Row'
import { lighten } from 'polished'
import Image from 'next/image'
import { useIsMobile } from 'lib/hooks/useWindowSize'

export const TabWrapper = styled(RowCenter)<{ outerBorder?: boolean; hasBackground?: boolean }>`
  gap: 12px;
  padding: 8px 12px;
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  color: ${({ theme }) => theme.text0};

  background: ${({ theme, hasBackground }) => (hasBackground ? theme.color2 : undefined)};

  ${({ outerBorder, theme }) =>
    outerBorder &&
    `
    border: 1px solid ${theme.border1};
  `}
`

export const TabButton = styled(RowCenter)<{
  active: boolean
  fontSize?: string
  borderColor?: string
  borderSize?: string
  activeColor?: string
  height?: string
  borderRadius?: string
  backgroundColor?: string
  style?: React.CSSProperties
  fontWeight?: string
}>`
  height: ${({ height }) => (height ? height : '40px')};
  position: relative;
  text-align: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  overflow: hidden;
  border-style: solid;
  border-width: ${({ borderSize }) => (borderSize ? borderSize : '0')};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : '')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '6px')};
  font-weight: ${({ active, fontWeight }) => (active ? fontWeight : 400)};
  color: ${({ active, theme }) => (active ? theme.almostWhite : theme.coolGrey)};
  background: ${({ active, theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : active ? theme.color4 : theme.color3};

  ${({ active, theme, activeColor, borderSize }) =>
    active &&
    `
    border:${borderSize ? borderSize : '1px'} solid ${activeColor ? activeColor : theme.color5};
  `}
  &:hover {
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
    background: ${({ active, theme, backgroundColor }) =>
      backgroundColor ? backgroundColor : active ? theme.color4 : lighten(0.02, theme.color3)};
  }
`

const TabButtonIconWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 15px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  top: 5px;
  right 6px;
  `}
`

export const Option = styled.div<{ active?: boolean }>`
  width: fit-content;
  color: ${({ theme }) => theme.text1};
  font-size: 18px;
  font-weight: 500;
  line-height: 19px;
  padding: 4px 0px 8px 0px;

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.almostWhite};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
  &:hover {
    cursor: pointer;
    color: ${({ theme, active }) => (active ? theme.gradLight : theme.text1)};
  }
`
type TabIcons = Record<string, string>

export function Tab({
  hasBackground = true,
  tabOptions,
  activeOption,
  outerBorder,
  icons,
  width,
  height,
  fontSize,
  borderRadius,
  borderSize,
  borderColor,
  activeColor,
  onChange,
  children,
}: {
  hasBackground?: boolean
  tabOptions: string[]
  activeOption: string
  outerBorder?: boolean
  icons?: TabIcons
  width?: string
  height?: string
  fontSize?: string
  borderRadius?: string
  borderSize?: string
  borderColor?: string
  activeColor?: string
  onChange: (tab: string) => void
  children?: React.ReactNode
}): JSX.Element {
  const isMobile = useIsMobile()
  return (
    <TabWrapper hasBackground={hasBackground} outerBorder={outerBorder}>
      {tabOptions.map((tab, i) => (
        <TabButton
          key={i}
          active={tab === activeOption}
          activeColor={activeColor}
          width={width}
          height={height}
          fontSize={fontSize}
          borderRadius={borderRadius}
          borderSize={borderSize}
          borderColor={borderColor}
          onClick={() => onChange(tab)}
        >
          {tab}
          {icons && icons.hasOwnProperty(tab) && (
            <TabButtonIconWrapper>
              <Image src={icons[tab]} width={isMobile ? '22' : '28'} height={isMobile ? '22' : '28'} alt={'tab icon'} />
            </TabButtonIconWrapper>
          )}
        </TabButton>
      ))}
      {children}
    </TabWrapper>
  )
}

export function TabModal({
  tabOptions,
  activeOption,
  onChange,
  outerBorder,
  fontSize,
  fontWeight,
  ...rest
}: {
  tabOptions: string[]
  activeOption: string
  onChange: (tab: string) => void
  outerBorder?: boolean
  fontSize: string
  fontWeight: string
  [x: string]: any
}): JSX.Element {
  return (
    <TabWrapper width={'100%'} justifyContent={'space-between'} outerBorder={outerBorder} {...rest}>
      {tabOptions.map((tab, i) => (
        <TabButton
          key={i}
          active={tab === activeOption}
          onClick={() => onChange(tab)}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          <div>{tab}</div>
        </TabButton>
      ))}
    </TabWrapper>
  )
}

export function GradientTabs({
  tabOptions,
  activeOption,
  onChange,
}: {
  tabOptions: string[]
  activeOption: string
  onChange: (tab: string) => void
}) {
  return (
    <RowStart style={{ gap: '16px' }}>
      {tabOptions.map((option, index) => (
        <Option key={index} active={option === activeOption} onClick={() => onChange(option)}>
          {option}
        </Option>
      ))}
    </RowStart>
  )
}

export function TabModalJSX({
  tabOptions,
  activeOption,
  onChange,
  outerBorder,
  ...rest
}: {
  tabOptions: { label: string; content: string | JSX.Element }[]
  activeOption: string
  onChange: (tab: string) => void
  outerBorder?: boolean
  [x: string]: any
}): JSX.Element {
  return (
    <TabWrapper width={'100%'} justifyContent={'space-between'} outerBorder={outerBorder} {...rest}>
      {tabOptions.map((tab, i) => (
        <TabButton key={i} active={tab.label === activeOption} onClick={() => onChange(tab.label)}>
          <div>{tab.content}</div>
        </TabButton>
      ))}
    </TabWrapper>
  )
}

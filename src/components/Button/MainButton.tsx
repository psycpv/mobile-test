import { useCallback, useState, MouseEvent } from 'react'
import styled, { useTheme } from 'styled-components'
import { Z_INDEX } from 'theme'
import Image from 'next/image'

import { titleCase } from 'utils/string'
import { PositionType } from 'types/trade'

import { RowCenter } from 'components/Row'
import { ExclamationMark, LongArrow, ShortArrow } from 'components/Icons'
import { ToolTipLeft, ToolTipTop } from 'components/ToolTip'
import INFO_ICON from '/public/static/images/other/Info.svg'

const Main = styled(RowCenter)<{ height?: string; inactive?: boolean }>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '48px'};
  cursor: pointer;
  position: relative;

  ${({ inactive }) =>
    inactive &&
    `
    opacity: 0.5;
  `}
`

const TopWrap = styled(RowCenter)<{
  clicked: boolean
  textColor?: string
  bgColor: string
  borderColor?: string
  hoverColor?: string
  longOrShort: boolean
  disabled?: boolean
  shadowHeight?: string
}>`
  font-size: 15px;
  font-weight: 700;
  height: 100%;
  position: relative;
  border-radius: 6px;
  z-index: ${Z_INDEX.deprecated_content};
  border: 1px solid
    ${({ theme, borderColor, longOrShort }) => borderColor ?? (longOrShort ? theme.darkPink : theme.darkBlue)};
  color: ${({ theme, textColor }) => textColor ?? theme.black};
  background: ${({ bgColor }) => bgColor};
  transition: width, transform 0ms ease-in-out;
  box-shadow: ${({ shadowHeight, disabled, theme, borderColor, longOrShort }) =>
    `0px ${shadowHeight ?? '4px'} 0px ${
      disabled ? theme.yankeesBlue : borderColor ?? (longOrShort ? theme.darkPink : theme.darkBlue)
    }`};

  &:hover {
    background: ${({ theme, longOrShort, disabled, hoverColor }) =>
      disabled
        ? theme.darkBluishGray
        : hoverColor
        ? hoverColor
        : longOrShort
        ? theme.brilliantLavender
        : theme.lightSkyBlue};
  }

  ${({ clicked }) =>
    clicked &&
    `
    transform: translateY(2px);
  `}

  ${({ theme, disabled }) =>
    disabled &&
    `
    background: ${theme.darkBluishGray};
    border-color: ${theme.yankeesBlue};
    cursor: default;
    color: ${theme.coolGrey};
  `}
`

const IconWrap = styled.div<{ top: string }>`
  position: absolute;
  right: 16px;
  top: ${({ top }) => top ?? '14px'};
`

export default function MainButton({
  onClick,
  ticker,
  positionType,
  textColor,
  bgColor,
  borderColor,
  hoverColor,
  tooltip,
  exclamationMark,
  customText,
  icon,
  disabled,
  simpleMode,
  children,
  className,
  width,
  height,
  shadowHeight,
  style,
  inactive,
}: {
  onClick?: () => void
  ticker?: string
  positionType?: PositionType
  textColor?: string
  bgColor?: string
  borderColor?: string
  hoverColor?: string
  tooltip?: string
  customText?: string
  exclamationMark?: boolean
  icon?: string | null
  disabled?: boolean
  simpleMode?: boolean
  children?: React.ReactNode
  className?: string
  width?: number
  height?: number
  shadowHeight?: number
  style?: React.CSSProperties
  inactive?: boolean
}) {
  const theme = useTheme()
  const [isClicked, setIsClicked] = useState(false)
  const longOrShort = positionType === PositionType.SHORT

  const handleOnMouseDown = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (disabled || inactive || event.button !== 0) return
      setIsClicked((prev) => !prev)
    },
    [disabled, inactive]
  )

  const handleOnMouseUp = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (disabled || inactive || event.button !== 0) return
      setIsClicked((prev) => !prev)
      setTimeout(() => {
        if (!disabled && onClick) onClick()
      }, 150)
    },
    [disabled, inactive, onClick]
  )

  return (
    <>
      {inactive && (
        <ToolTipTop id={`main-button-${positionType}`} aria-haspopup="true">
          <Image src={INFO_ICON} width={'14px'} height={'14px'} alt={'info icon'} />
          <div>{tooltip}</div>
        </ToolTipTop>
      )}
      <Main
        className={className}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
        width={width ? `${width}px` : undefined}
        height={height ? `${height}px` : undefined}
        style={style}
        inactive={inactive}
        data-for={`main-button-${positionType}`}
        data-tip
      >
        <TopWrap
          clicked={isClicked}
          textColor={textColor}
          bgColor={bgColor ?? (longOrShort ? theme.pink : theme.blue)}
          borderColor={borderColor}
          hoverColor={hoverColor}
          longOrShort={longOrShort}
          disabled={disabled}
          shadowHeight={shadowHeight ? `${shadowHeight}px` : undefined}
        >
          {!simpleMode && !customText && !children && `Open ${titleCase(positionType ?? '')}`}
          {customText && customText}
          {children}

          {!disabled && !simpleMode ? (
            <IconWrap top={icon ? '10px' : '14px'}>
              {icon ? (
                <Image width={28} height={28} src={icon} alt={'icon'} />
              ) : positionType === PositionType.LONG ? (
                <LongArrow width={19} height={11} color={'#001426'} style={{ marginLeft: '8px' }} />
              ) : (
                <ShortArrow width={19} height={11} color={'#001426'} style={{ marginLeft: '8px' }} />
              )}
            </IconWrap>
          ) : (
            <IconWrap top={'14px'}>
              {tooltip && (
                <a data-tip data-for={'tooltip'}>
                  <ExclamationMark />
                  <ToolTipLeft id={'tooltip'} aria-haspopup="true">
                    {customText}
                  </ToolTipLeft>
                </a>
              )}
              {!tooltip && exclamationMark && <ExclamationMark />}
            </IconWrap>
          )}
        </TopWrap>
      </Main>
    </>
  )
}

import Image from 'next/image'
import { useCallback } from 'react'
import styled from 'styled-components'

const Button = styled.button<{ height?: string; width?: string; disabled?: boolean; fontSize?: string }>`
  height: 36px;
  width: 100%;
  height: ${({ height }) => height ?? '36px'};
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  font-size: ${({ fontSize }) => fontSize ?? '13px'};
  text-align: center;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.dark2};
  background: ${({ theme }) => theme.blue};

  &:hover {
    background: ${({ theme }) => theme.lightSkyBlue};
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
  `}
`

const IconWrap = styled.div<{ top?: string; right?: string }>`
  position: absolute;
  right: ${({ right }) => right ?? '16px'};
  top: ${({ top }) => top ?? '14px'};
`

export default function SolidButton({
  onClick,
  customText,
  icon,
  iconSize,
  iconTop,
  iconRight,
  disabled,
  width,
  height,
  fontSize,
}: {
  onClick?: () => void
  customText?: string
  icon?: string | null
  iconSize?: number
  iconTop?: string
  iconRight?: string
  disabled?: boolean
  width?: number
  height?: number
  fontSize?: string
}) {
  const handleClick = useCallback(() => {
    if (!disabled && onClick) onClick()
  }, [disabled, onClick])

  return (
    <Button
      disabled={disabled}
      onClick={handleClick}
      width={width ? `${width}px` : undefined}
      height={height ? `${height}px` : undefined}
      fontSize={fontSize}
    >
      {customText}
      {icon && (
        <IconWrap top={iconTop} right={iconRight}>
          <Image width={iconSize ?? 28} height={iconSize ?? 28} src={icon} alt={'icon'} />
        </IconWrap>
      )}
    </Button>
  )
}

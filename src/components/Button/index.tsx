import styled, { useTheme } from 'styled-components'
import { RowCenter } from 'components/Row'
import { lighten } from 'polished'
import { Button, ButtonProps } from 'rebass'
import { useCallback, useState } from 'react'

export const BaseButton = styled(RowCenter)<{ active?: boolean; disabled?: boolean }>`
  padding: 1rem;
  height: 100%;
  font-weight: 600;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:disabled {
    opacity: 50%;
    cursor: auto;
    pointer-events: none;
  }

  will-change: transform;
  transition: transform 450ms ease;
  transform: perspective(1px) translateZ(0);

  > * {
    user-select: none;
  }

  > a {
    text-decoration: none;
  }
`

export const NavButton = styled(BaseButton)<{ width?: number | string }>`
  height: 40px;
  width: 40px;
  font-size: 14px;
  padding: 0 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.yankeesBlue};
  background: ${({ theme }) => theme.color4};
  box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.yankeesBlue};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    height: 32px;
    width: 32px;
  `};
`

export const PrimaryButton = styled(BaseButton)<{ height?: string | number }>`
  z-index: 0;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  height: ${({ height }) => (height ? height : '45px')};

  border: 2px solid ${({ theme }) => theme.border1};
  background: ${({ theme }) => theme.gradLight};
  color: ${({ theme }) => theme.text0};

  ${({ disabled }) =>
    disabled &&
    `
      cursor: default;
      opacity:0.5;
  `}
`

export const SecondaryButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.bg1};
  border: 1px solid ${({ theme }) => theme.bg7};

  font-weight: 500;
  font-size: 12px;

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg1};
  }

  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.bg1)};
  }
`

export const ButtonEmpty = styled(BaseButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.red1};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const TableButton = styled(PrimaryButton)<{ width?: string | number }>`
  width: ${({ width }) => (width ? width : '132px')};
  height: 40px;
  padding: 0;
  white-space: nowrap;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    & > * {
      margin: -4px;
    }
  `}
`

export const WhiteButton = styled(TableButton)`
  background: ${({ theme }) => theme.bg1};
  border: 2px solid ${({ theme }) => theme.text0};
  color: ${({ theme }) => theme.text0};

  &:focus,
  &:hover {
    background: ${({ theme }) => theme.bg3};
  }
`
export const BlueButton = styled(TableButton)`
  background: ${({ theme }) => theme.bg0};
  border: 2px solid ${({ theme }) => theme.primary0};
  color: ${({ theme }) => theme.primary0};

  &:focus,
  &:hover {
    background: ${({ theme }) => theme.bg2};
  }

  ${({ theme, disabled }) =>
    disabled &&
    `
    opacity:0.5;
    &:focus,
    &:hover {
      background: ${theme.bg0};
    }
  `}
`

export const MaxButton = styled.div<{
  color?: string
  fontSize?: string
  fontWeight?: number
}>`
  font-size: ${({ fontSize }) => fontSize ?? '12px'};
  color: ${({ theme, color }) => color ?? theme.pink};
  font-weight: ${({ fontWeight }) => fontWeight ?? 500};
  padding-left: 6px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    filter: brightness(0.9);
  }
`

export const OptionButton = styled(BaseButton)<{ active?: boolean }>`
  height: 36px;
  width: 62px;
  font-size: 13px;
  padding: 0;
  color: ${({ theme }) => theme.text1};
  border: 1.5px solid ${({ theme, active }) => (active ? theme.border2 : theme.border1)};
  background: ${({ theme, active }) => (active ? theme.bg3 : 'transparent')};
  position: relative;
  z-index: 1;
  transition: all 0.1s;
  cursor: ${({ active }) => active && 'pointer'};

  ${({ theme }) => theme.mediaWidth.upToMedium`
      margin-right: 3px;
  `}
  &:hover {
    border: 1.5px solid ${({ theme, active }) => (active ? theme.border3 : theme.text1)};
  }
`

export const EnterButton = styled(BaseButton)<{ active?: boolean; calculationLoading?: boolean }>`
  width: 100px;
  height: 26px;
  padding: 8px 16px;
  margin-bottom: 6px;
  background: transparent;
  background-color: ${({ theme }) => theme.primaryDarkBg};
  opacity: ${({ calculationLoading }) => (calculationLoading ? 0.4 : 1)};

  &:focus {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
`

export const PositionActionButton = styled(SecondaryButton)<{ expired?: boolean; liquidatePending?: boolean }>`
  width: 100px;
  height: 30px;
  padding: 7px 0;
  margin-left: auto;
  border: 1px solid ${({ theme }) => theme.primaryPink};
  color: ${({ theme }) => theme.primaryPink};
  background: ${({ theme }) => theme.bgPink1};

  &:hover {
    background: ${({ theme }) => lighten(0.03, theme.bgPink1)};
  }

  ${({ expired, theme }) =>
    expired &&
    `
    color: ${theme.warning};
    background: ${theme.bgWarning};
    border-color: ${theme.warning};

    &:hover {
    background: ${lighten(0.05, theme.bgWarning)};
  }`}

  ${({ liquidatePending, theme }) =>
    liquidatePending &&
    `
    color: ${theme.darkPink};
    background: ${theme.bgWarning};
    border-color: ${theme.warning};

    &:hover {
    background: ${lighten(0.2, theme.warning)};
  }`}
`

export const PositionRowActionButton = styled(PositionActionButton)<{
  expired?: boolean
  liquidatePending?: boolean
  locked?: boolean
  height?: string
  width?: string
}>`
  max-width: 120px;
  ${({ width }) => width && `width:${width};`}
  height: ${({ height }) => height ?? '25px'};
  margin-left: initial;
  border: 1px solid ${({ theme }) => theme.yankeesBlue};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  background: ${({ theme }) => theme.color4};
  white-space: nowrap;

  box-shadow: drop-shadow(0 2px 0 0 ${({ theme }) => theme.yankeesBlue});

  &:hover {
    background: ${({ theme }) => theme.yankeesBlue};
  }

  ${({ expired, theme, locked }) =>
    expired &&
    locked &&
    `
    color: ${theme.zinnwalditeBrown};
    background: ${theme.darkVanilla};
    border: 1px solid ${theme.raisinBlack};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
    background: ${theme.unlockHborder};
  }`}
`

const TextButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`

const TextButtonWithHoverIcon = styled(TextButton)`
  & > * {
    transition: all 0.3s ease-out;
    transform: translateX(0px);
  }

  &:disabled {
    color: ${({ theme }) => theme.gray3};
    cursor: default;

    &:hover {
      & > * {
        transform: translateX(0) !important;
      }
    }
  }

  &:hover {
    text-decoration: none !important;

    & > * {
      transition: all 0.3s ease-out;
      transform: translateX(2px);
    }
  }
`

const FilterButtonWrapper = styled.button<{
  isActive?: boolean
  gap: string | number
  smGap: string | number
  color?: string
}>`
  border-radius: 6px;
  padding: 0.75em 1em;
  background: ${({ theme, isActive }) => (isActive ? theme.blue6 : theme.color3)};
  color: ${({ theme, isActive, color }) => (color ? color : isActive ? theme.dark2 : theme.coolGrey)};

  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: ${({ gap }) => gap};

  ${({ theme, smGap }) => theme.mobileFirstMediaWidth.fromSmall`
    font-size: 16px;
    gap: ${smGap ?? smGap};
  `}
`

const SelectTextButton = styled(TextButton)<{ color?: string }>`
  color: ${({ color }) => color};

  &:hover {
    text-decoration: none !important;
  }

  & > * {
    color: ${({ color }) => color} !important;
  }
`

const ButtonWrapper = styled.div<{
  bg?: string
  width?: string | number
  smWidth?: string | number
  minWidth?: string | number
  smMinWidth?: string | number
  marginLeft?: any
  disabled?: boolean
}>`
  background: ${({ disabled, bg }) => (disabled ? '#bbbbbb' : `linear-gradient(180deg, #ffffff00 0%, ${bg} 100%)`)};
  border-radius: 6px;
  border-bottom: 5px solid ${({ disabled, bg }) => (disabled ? '#5D5D5D' : bg)};
  width: ${({ width }) => width ?? 'fit-content'};
  margin-left: ${({ marginLeft }) => marginLeft ?? '0px'};
  min-width: ${({ minWidth }) => minWidth ?? 'fit-content'};

  ${({ theme, smWidth, smMinWidth }) => theme.mobileFirstMediaWidth.fromSmall`
    width: ${smWidth ?? 'fit-content'};
    min-width: ${smMinWidth ?? 'fit-content'};
  `}
`
const ButtonComponent = styled(Button)<{ active: boolean }>`
  border-radius: 6px;
  transform: ${({ active }) => (active ? 'translateY(4px)' : 'translateY(0px)')};

  &:disabled {
    color: #5d5d5d !important;
    background-color: #bbbbbb !important;
    cursor: default !important;

    & * {
      color: #5d5d5d !important;
      fill: #5d5d5d !important;
    }
  }
`

const BasedButton = (
  props: ButtonProps & {
    width?: string | number
    smWidth?: string | number
    smMinWidth?: string | number
    borderColor: string
  }
) => {
  const [clicked, setClicked] = useState(false)

  const handleMouseDown = useCallback(() => {
    setClicked(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setClicked(false)
  }, [])

  const handleMouseUp = useCallback(() => {
    setClicked(false)
  }, [])

  return (
    <ButtonWrapper
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      bg={props.borderColor}
      width={props.width}
      smWidth={props.smWidth}
      smMinWidth={props.smMinWidth}
      disabled={props.disabled}
      marginLeft={props.marginLeft}
    >
      <ButtonComponent {...props} active={clicked} />
    </ButtonWrapper>
  )
}

export const ThemedButton = {
  Primary(props: ButtonProps & { width?: string | number; smWidth?: string | number }) {
    return (
      <BasedButton
        fontWeight={400}
        bg={'#80BBF2'}
        borderColor={'#3C7FBD'}
        color={'#001426'}
        width={props.width}
        smWidth={props.smWidth}
        display={'flex'}
        justifyContent={'center'}
        fontSize={[13, 14, 16]}
        {...props}
      />
    )
  },
  Secondary(props: ButtonProps & { width?: string | number; smWidth?: string | number }) {
    return (
      <BasedButton
        fontWeight={400}
        bg={'#343856'}
        borderColor={'#1D233E'}
        color="white"
        width={props.width}
        smWidth={props.smWidth}
        display={'flex'}
        justifyContent={'center'}
        fontSize={[13, 14, 16]}
        {...props}
      />
    )
  },
  Pink(props: ButtonProps & { width?: string | number; smWidth?: string | number; smMinWidth?: string | number }) {
    const theme = useTheme()

    return (
      <BasedButton
        fontWeight={400}
        bg={theme.pink}
        borderColor={'#BF5AB8'}
        color={theme.dark2}
        width={props.width}
        smWidth={props.smWidth}
        smMinWidth={props.smMinWidth}
        display={'flex'}
        justifyContent={'center'}
        fontSize={[13, 14, 16]}
        {...props}
      />
    )
  },
  Text(props: ButtonProps & { width?: string | number }) {
    return <TextButton display={'flex'} justifyContent={'center'} {...props} />
  },
  TextWithHoverIcon(props: ButtonProps & { width?: string | number }) {
    return <TextButtonWithHoverIcon display={'flex'} justifyContent={'center'} {...props} />
  },
  Filter(
    props: ButtonProps & {
      width?: string | number
      isActive?: boolean
      gap?: string | number
      smGap?: string | number
    }
  ) {
    return <FilterButtonWrapper isActive={props.isActive} {...props}></FilterButtonWrapper>
  },
  SelectText(props: ButtonProps & { width?: string | number; isSelect?: boolean }) {
    return (
      <SelectTextButton
        display={'flex'}
        justifyContent={'center'}
        color={props.isSelect ? props.color : '#8D90B5'}
        {...props}
      />
    )
  },
}

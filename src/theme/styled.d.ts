import { ThemedCssFunction } from 'styled-components/macro'
import { SupportedThemes } from 'theme'

export type Color = string

export interface Colors {
  themeName: SupportedThemes

  // base
  white: Color
  black: Color

  // text
  text0: Color
  text1: Color
  text2: Color
  text3: Color
  text4: Color
  text5: Color
  text7: Color

  // backgrounds
  bg: Color
  bg0: Color
  bg1: Color
  bg2: Color
  bg3: Color
  bg4: Color
  bg5: Color
  bg6: Color
  bg7: Color
  bg8: Color

  bgLoose: Color
  bgWin: Color
  bgWarning: Color
  bgPink: Color
  bgPink1: Color

  primaryPink: Color
  lightPink: Color

  // borders
  border1: Color
  border2: Color
  border3: Color

  gradLight: Color
  hoverGradLight: Color
  primaryGradientBg: Color
  primaryBlackNew: Color
  primaryDisable: Color
  primaryDarkBg: Color
  primaryDark: Color
  primaryBlue1: Color

  //blues
  primary0: Color
  primary1: Color
  primary2: Color
  primary3: Color
  primary6: Color

  primaryText1: Color

  // pinks
  secondary1: Color
  secondary2: Color

  red1: Color
  red2: Color
  red3: Color

  red4: Color
  red5: Color
  green1: Color
  green2: Color
  green4: Color
  green5: Color
  green6: Color
  green7: Color
  yellow1: Color
  yellow4: Color
  RYB: Color
  blue1: Color
  blue2: Color
  blue3: Color
  blue4: Color
  blue5: Color
  blue6: Color
  blue7: Color
  blue8: Color
  blue9: Color
  primaryBlue: Color

  warning: Color

  // v2(vibe redesign) colors
  color1: Color
  color2: Color
  color3: Color
  color4: Color
  color5: Color
  color6: Color

  inactiveText: Color
  almostWhite: Color

  pink: Color
  pink1: Color
  pink30: Color
  darkPink: Color
  tempPink: Color
  pwaBgPink: Color
  brilliantLavender: Color
  blue: Color
  darkBlue: Color
  queenBlue: Color
  buttonBlue: Color
  jordyBlue: Color
  lightSkyBlue: Color
  darkPurple: Color
  darkBluishGray: Color
  unlockHborder: Color

  yankeesBlue: Color
  bakerMillerPink: Color
  rootBeer: Color
  raisinBlack: Color
  darkVanilla: Color
  zinnwalditeBrown: Color

  coolGrey: Color
  slateGray: Color
  periwinkle: Color

  gray1: Color
  gray2: Color
  gray3: Color

  red: Color
  green: Color
  brown: Color

  dark1: Color
  arrow: Color
  dark2: Color

  orange: Color
}

export type Shadow = string

export interface Shadows {
  shadow1: Shadow
  boxShadow1: Shadow
  boxShadow2: Shadow
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors, Shadows {
    grids: Grids

    breakpoints: number[]

    fontSizes: {
      10: string
      12: string
      14: string
      16: string
      18: string
      20: string
      22: string
      24: string
      26: string
      28: string
      30: string
      32: string
      34: string
      36: string
      38: string
      40: string
      42: string
      44: string
      46: string
      48: string
    }

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
      upToExtraLarge: ThemedCssFunction<DefaultTheme>
    }

    mobileFirstMediaWidth: {
      fromSmall: ThemedCssFunction<DefaultTheme>
      fromMedium: ThemedCssFunction<DefaultTheme>
      fromLarge: ThemedCssFunction<DefaultTheme>
      fromExtraLarge: ThemedCssFunction<DefaultTheme>
    }
  }
}

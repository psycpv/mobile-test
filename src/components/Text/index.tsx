import styled from 'styled-components'
import { Text as RebassText, TextProps as TextPropsOriginal } from 'rebass'

import { Colors } from 'theme/styled'

type TextProps = Omit<TextPropsOriginal, 'css'>

// TODO: use Text component instead of TextWrapper
export const TextWrapper = styled(RebassText)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const Text = styled(RebassText)<{ color?: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color ?? 'white']};
`

//TODO: remove unused text
export const ThemedText = {
  Main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text2'} {...props} />
  },
  Link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  Label(props: TextProps) {
    return <TextWrapper fontWeight={600} color={'text1'} {...props} />
  },
  Black(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text1'} {...props} />
  },
  White(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'white'} {...props} />
  },
  Body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  LargeHeader(props: TextProps) {
    return <TextWrapper fontWeight={700} fontSize={36} {...props} />
  },
  MediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={16} {...props} />
  },
  CloseModalHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={18} {...props} />
  },
  SubHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  Small(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={11} {...props} />
  },
  Blue(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'blue1'} {...props} />
  },
  DarkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text3'} {...props} />
  },
  Gray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'bg3'} {...props} />
  },
  Italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
  },
  Error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
  },
  // CardHeader(props: TextProps) {
  //   return <TextWrapper fontWeight={400} fontSize={22} color={'white'} {...props} />
  // },
  SmallCardHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={18} color={'white'} {...props} />
  },
  EasternBlue(props: TextProps) {
    return <TextWrapper fontWeight={400} color={'coolGrey'} {...props} />
  },
  Green(props: TextProps) {
    return <TextWrapper fontWeight={400} color={'green2'} {...props} />
  },
  Red(props: TextProps) {
    return <TextWrapper fontWeight={400} color={'red5'} {...props} />
  },
  Pink(props: TextProps) {
    return <TextWrapper fontWeight={400} color={'pink'} {...props} />
  },
  CoolGray(props: TextProps) {
    return <TextWrapper fontWeight={400} color={'coolGrey'} {...props} />
  },
  LightBlue(props: TextProps) {
    return <TextWrapper fontWeight={400} color={'blue6'} {...props} />
  },
  H1(props: TextProps) {
    return <Text fontSize={[30, 34, 40, 48]} {...props} />
  },
  H2(props: TextProps) {
    return <Text fontSize={[24, 26, 30, 32]} {...props} />
  },
  H3(props: TextProps) {
    return <Text fontSize={[18, 20, 22, 24]} {...props} />
  },
  P1(props: TextProps) {
    return <Text fontSize={[18, 20, 22, 24]} {...props} />
  },
  P2(props: TextProps) {
    return <Text fontSize={[16, 18, 20, 22]} {...props} />
  },
  P3(props: TextProps) {
    return <Text fontSize={[16, null, 18, 20]} {...props} />
  },
  P4(props: TextProps) {
    return <Text fontSize={[14, null, 16, 18]} {...props} />
  },
  P5(props: TextProps) {
    return <Text fontSize={[12, null, 14, 16]} {...props} />
  },
  P6(props: TextProps) {
    return <Text fontSize={[12, null, 12, 14]} {...props} />
  },
  P7(props: TextProps) {
    return <Text fontSize={[10, null, null, 12]} {...props} />
  },
  PageTitle(props: TextProps) {
    return <PageTitleWrapper fontWeight={400} {...props} />
  },
}

const PageTitleWrapper = styled(ThemedText.H1)<{ color: keyof Colors }>`
  background: linear-gradient(180deg, #f9a2f3 30%, #ffffff 80%);
  font-family: Londrina Solid !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

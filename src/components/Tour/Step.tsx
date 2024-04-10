import { ReactElement } from 'react'
import styled from 'styled-components'
import { Logo } from 'components/Icons'

const Wrapper = styled.div`
  color: ${({ theme }) => theme.almostWhite};
`

const LogoWrapper = styled.div`
  margin: 0px 0px 0px 6px;
`

const Title = styled.div`
  margin-top: 30px;
  text-align: center;
  padding: 0px 30px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Content = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  padding: 0px 20px;
  line-height: 20px;
`

const SubTitle = styled.div`
  margin-top: 30px;
  text-align: center;
  padding: 0px 30px;
`

export const Step = ({
  title,
  subTitle,
  content,
  icon,
}: {
  title: string
  subTitle?: string
  content: string | ReactElement
  icon?: ReactElement
}) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo width={112} height={43} />
      </LogoWrapper>

      <Title>
        {title}
        {icon}
      </Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Content>{content}</Content>
    </Wrapper>
  )
}

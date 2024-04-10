import { Card } from 'components/Card'
import { ThemedText } from 'components/Text'
import { ThemedButton } from 'components/Button'
import { useTheme } from 'styled-components'
import ArrowRight from 'components/Icons/ArrowRight'

export const UserReferralCodeCard = () => {
  const theme = useTheme()

  return (
    <Card>
      <ThemedText.P2 marginBottom="4px">Your Referral Code:</ThemedText.P2>
      <ThemedText.P1 color={theme.blue8} marginBottom="4px">
        -
      </ThemedText.P1>
      <ThemedText.P6 marginBottom="32px">Invite friends with your code. They trade, you earn rewards.</ThemedText.P6>

      <ThemedButton.Primary marginLeft="auto" minWidth="180px">
        Create Referral
        <ArrowRight marginLeft={'6px'} color={'#001426'} width={17} height={17} />
      </ThemedButton.Primary>
    </Card>
  )
}

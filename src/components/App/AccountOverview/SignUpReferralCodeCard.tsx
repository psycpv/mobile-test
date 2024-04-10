import { Card } from 'components/Card'
import { ThemedText } from 'components/Text'
import { ThemedButton } from 'components/Button'
import { useTheme } from 'styled-components'
import Lock from 'components/Icons/Lock'

export const SignUpReferralCodeCard = () => {
  const theme = useTheme()

  return (
    <Card>
      <ThemedText.P2 marginBottom="4px">Sign-Up Referral Code:</ThemedText.P2>
      <ThemedText.P1 color={theme.blue8} marginBottom="4px">
        234565665
      </ThemedText.P1>
      <ThemedText.P6 marginBottom="32px">You need to lock 11 $BASED to unlock Rakeback and Prizes.</ThemedText.P6>

      <ThemedButton.Primary marginLeft="auto" minWidth="180px">
        <Lock marginRight={'6px'} />
        Unlock Rakeback
      </ThemedButton.Primary>
    </Card>
  )
}

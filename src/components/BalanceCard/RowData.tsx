import { Loader } from 'components/Icons'
import { Row } from 'components/Row'
import { ThemedText } from 'components/Text'
import { useTheme } from 'styled-components'

interface RowDataProps {
  label: string
  value: any
}

export const RowData = ({ label, value }: RowDataProps) => {
  const theme = useTheme()

  return (
    <Row justify={'space-between'}>
      <ThemedText.P6 color={theme.coolGrey}>{label}</ThemedText.P6>
      <ThemedText.White fontSize={16} fontWeight={400}>
        {value ? value : <Loader size={'12px'} stroke="#EBEBEC" />}
      </ThemedText.White>
    </Row>
  )
}

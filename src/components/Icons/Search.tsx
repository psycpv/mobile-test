import { Search as SearchIcon } from 'react-feather'

import { useTheme } from 'styled-components'
import { IconWrapper } from './index'

export default function Search({ size }: { size?: number | string }) {
  const theme = useTheme()
  return (
    <IconWrapper size={size?.toString()} stroke={theme.text4}>
      <SearchIcon size={size ?? 16} />
    </IconWrapper>
  )
}

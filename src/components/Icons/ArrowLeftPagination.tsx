import { IconWrapper } from 'components/Icons/index'

export default function ArrowLeftPagination({
  width = 7,
  height = 14,
  color = '#5B6093',
  ...rest
}: {
  width?: number
  height?: number
  color?: string
  [rest: string]: any
}) {
  return (
    <IconWrapper {...rest}>
      <svg width={width} height={height} viewBox="0 0 7 14" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.24393 1.04734L0.472867 5.78894C-0.157623 6.58169 -0.157624 7.86701 0.472867 8.65976L4.24393 13.4014C5.26099 14.6802 7 13.7745 7 11.966L7 2.48275C7 0.674232 5.26099 -0.231479 4.24393 1.04734Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  )
}

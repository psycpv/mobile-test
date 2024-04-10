import { IconWrapper } from 'components/Icons/index'

export default function ArrowRightPagination({
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
          d="M2.75607 1.04734L6.52713 5.78894C7.15762 6.58169 7.15762 7.86701 6.52713 8.65976L2.75607 13.4014C1.73901 14.6802 -7.51962e-09 13.7745 -6.78191e-08 11.966L-3.84007e-07 2.48275C-4.44307e-07 0.674232 1.73901 -0.231479 2.75607 1.04734Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  )
}

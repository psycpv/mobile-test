import { IconWrapper } from 'components/Icons/index'

export default function ExitMediumModal({
  width = 28,
  height = 28,
  color = '#2C2C2C',
  ...rest
}: {
  width?: number
  height?: number
  color?: string
  [x: string]: any
}) {
  return (
    <IconWrapper {...rest}>
      <svg width={width} height={height} viewBox="0 0 28 28" fill={color} xmlns="http://www.w3.org/2000/svg">
        <rect width={width} height={height} rx="6" fill="#C9A2FF" />
        <path
          d="M18.6875 10.7188L15.4062 14L18.6875 17.3125C19.0938 17.6875 19.0938 18.3438 18.6875 18.7188C18.3125 19.125 17.6562 19.125 17.2812 18.7188L14 15.4375L10.6875 18.7188C10.3125 19.125 9.65625 19.125 9.28125 18.7188C8.875 18.3438 8.875 17.6875 9.28125 17.3125L12.5625 14L9.28125 10.7188C8.875 10.3438 8.875 9.6875 9.28125 9.3125C9.65625 8.90625 10.3125 8.90625 10.6875 9.3125L14 12.5938L17.2812 9.3125C17.6562 8.90625 18.3125 8.90625 18.6875 9.3125C19.0938 9.6875 19.0938 10.3438 18.6875 10.7188Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  )
}

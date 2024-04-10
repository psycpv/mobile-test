import { IconWrapper } from 'components/Icons/index'

export default function InputSearch({
  width = 17,
  height = 20,
  color = '#22263F',
  ...rest
}: {
  width?: number
  height?: number
  color?: string
  [rest: string]: any
}) {
  return (
    <IconWrapper {...rest}>
      <svg width={width} height={height} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.54494 9.48889C4.32337 8.59799 3.52788 7.15617 3.52788 5.53186C3.52788 2.83268 5.72384 0.636719 8.42303 0.636719C11.1222 0.636719 13.3182 2.83268 13.3182 5.53186C13.3182 7.15617 12.5227 8.59799 11.3011 9.48889C14.3378 10.6509 16.5 13.5952 16.5 17.0355C16.5 18.52 15.2922 19.7278 13.8077 19.7278H3.03838C1.55382 19.7278 0.346054 18.52 0.346054 17.0355C0.346054 13.5952 2.50826 10.6509 5.54494 9.48889ZM11.8496 5.53186C11.8496 3.64244 10.3124 2.10528 8.42303 2.10528C6.53361 2.10528 4.99644 3.64244 4.99644 5.53186C4.99644 7.42128 6.53361 8.95848 8.42303 8.95848C10.3124 8.95848 11.8496 7.42128 11.8496 5.53186ZM3.03838 18.2592H13.8077C14.4825 18.2592 15.0314 17.7102 15.0314 17.0354C15.0314 13.3915 12.067 10.427 8.42299 10.427C4.77902 10.427 1.81454 13.3914 1.81454 17.0354C1.81457 17.7102 2.36355 18.2592 3.03838 18.2592Z"
          fill="#80BBF2"
          stroke={color}
        />
      </svg>
    </IconWrapper>
  )
}

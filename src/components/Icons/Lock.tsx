import { IconWrapper } from 'components/Icons/index'

export default function Lock({
  width = 19,
  height = 18,
  color = '#001426',
  ...rest
}: {
  width?: number | string
  height?: number | string
  color?: string
  [x: string]: any
}) {
  return (
    <IconWrapper {...rest}>
      <svg width={width} height={height} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.93262 5.29688V6.9375H15.1357C16.332 6.9375 17.3232 7.92871 17.3232 9.125V15.6875C17.3232 16.918 16.332 17.875 15.1357 17.875H4.19824C2.96777 17.875 2.01074 16.918 2.01074 15.6875V9.125C2.01074 7.92871 2.96777 6.9375 4.19824 6.9375H4.74512V5.29688C4.74512 2.59668 6.93262 0.375 9.66699 0.375C11.6152 0.375 13.3242 1.53711 14.1104 3.21191C14.3496 3.75879 14.1104 4.4082 13.5635 4.64746C13.0508 4.9209 12.3672 4.68164 12.1279 4.13477C11.6836 3.21191 10.7266 2.5625 9.66699 2.5625C8.12891 2.5625 6.93262 3.79297 6.93262 5.29688Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  )
}

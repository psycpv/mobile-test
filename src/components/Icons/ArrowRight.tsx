import { IconWrapper } from 'components/Icons/index'

export default function ArrowRight({
  width = 17,
  height = 17,
  color = '#F0A7EB',
  ...rest
}: {
  width?: number | string
  height?: number | string
  color?: string
  [x: string]: any
}) {
  return (
    <IconWrapper {...rest}>
      <svg width={width} height={height} viewBox="0 0 18 18" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.4082 9.91113L13.0332 14.2861C12.623 14.7305 11.9053 14.7305 11.4951 14.2861C11.0508 13.876 11.0508 13.1582 11.4951 12.748L13.9902 10.2188H1.34375C0.728516 10.2188 0.25 9.74023 0.25 9.125C0.25 8.54395 0.728516 8.03125 1.34375 8.03125H13.9902L11.4951 5.53613C11.0508 5.12598 11.0508 4.4082 11.4951 3.99805C11.9053 3.55371 12.623 3.55371 13.0332 3.99805L17.4082 8.37305C17.8525 8.7832 17.8525 9.50098 17.4082 9.91113Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  )
}

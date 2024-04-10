import { IconWrapper } from 'components/Icons/index'

export default function ArrowLeft({
  width = 17,
  height = 17,
  color = '#F0A7EB',
  ...rest
}: {
  width?: number
  height?: number
  color?: string
  [rest: string]: any
}) {
  return (
    <IconWrapper {...rest}>
      <svg width={width} height={height} viewBox="0 0 15 10" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.24609 4.64844L4.74609 1.14844C5.07422 0.792969 5.64844 0.792969 5.97656 1.14844C6.33203 1.47656 6.33203 2.05078 5.97656 2.37891L3.98047 4.375H14.125C14.5898 4.375 15 4.78516 15 5.25C15 5.74219 14.5898 6.125 14.125 6.125H3.98047L5.97656 8.14844C6.33203 8.47656 6.33203 9.05078 5.97656 9.37891C5.64844 9.73438 5.07422 9.73438 4.74609 9.37891L1.24609 5.87891C0.890625 5.55078 0.890625 4.97656 1.24609 4.64844Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  )
}

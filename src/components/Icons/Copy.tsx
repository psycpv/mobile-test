import { IconWrapper } from 'components/Icons/index'

export default function Copy({ color = '#F0A7EB', ...rest }: { color?: string; [rest: string]: any }) {
  return (
    <IconWrapper {...rest}>
      <svg width="100%" height="100%" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.1562 0.625H16.2422C16.7344 0.625 17.2676 0.871094 17.6367 1.24023L20.3848 3.98828C20.7539 4.35742 21 4.89062 21 5.38281V14.4062C21 15.5137 20.0977 16.375 19.0312 16.375H11.1562C10.0488 16.375 9.1875 15.5137 9.1875 14.4062V2.59375C9.1875 1.52734 10.0488 0.625 11.1562 0.625ZM1.96875 5.875H7.875V8.5H2.625V19H10.5V17.6875H13.125V19.6562C13.125 20.7637 12.2227 21.625 11.1562 21.625H1.96875C0.861328 21.625 0 20.7637 0 19.6562V7.84375C0 6.77734 0.861328 5.875 1.96875 5.875Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  )
}

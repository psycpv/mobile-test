import React from 'react'

export default function ExclamationMark({
  width = 20,
  height = 18,
  color = '#DCAB2E',
  bg = '#473F2A',
  ...rest
}: {
  width?: number
  height?: number
  color?: string
  bg?: string
  [x: string]: any
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M8.48617 0.836693C9.11369 -0.278897 10.7199 -0.278898 11.3474 0.836692L19.6204 15.5442C20.2359 16.6384 19.4452 17.9903 18.1898 17.9903H1.6438C0.388406 17.9903 -0.402285 16.6384 0.213187 15.5442L8.48617 0.836693Z"
        fill={bg}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9051 15.9466L10.6321 1.23905C10.3183 0.681259 9.51523 0.681258 9.20147 1.23905L0.928496 15.9466C0.620759 16.4937 1.01611 17.1696 1.6438 17.1696H18.1898C18.8175 17.1696 19.2128 16.4937 18.9051 15.9466ZM11.3474 0.836692C10.7199 -0.278898 9.11369 -0.278897 8.48617 0.836693L0.213187 15.5442C-0.402285 16.6384 0.388406 17.9903 1.6438 17.9903H18.1898C19.4452 17.9903 20.2359 16.6384 19.6204 15.5442L11.3474 0.836692Z"
        fill={color}
      />
      <path
        d="M9.91685 4.44867C9.25415 4.44867 8.73299 5.01507 8.78803 5.67548L9.25429 11.2706C9.28087 11.5896 9.54756 11.835 9.86769 11.835H9.96601C10.2861 11.835 10.5528 11.5896 10.5794 11.2706L11.0457 5.67548C11.1007 5.01507 10.5796 4.44867 9.91685 4.44867Z"
        fill={color}
      />
      <path
        d="M9.91685 15.5282C10.5967 15.5282 11.1479 14.9771 11.1479 14.2972C11.1479 13.6173 10.5967 13.0661 9.91685 13.0661C9.23696 13.0661 8.68579 13.6173 8.68579 14.2972C8.68579 14.9771 9.23696 15.5282 9.91685 15.5282Z"
        fill={color}
      />
    </svg>
  )
}

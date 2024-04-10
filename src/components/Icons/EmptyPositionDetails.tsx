import React from 'react'

export default function EmptyPosition({
  width = 300,
  height = 70,
  ...rest
}: {
  width?: number
  height?: number
  [x: string]: any
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 300 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <rect width="280" height="28.1932" fill="#323847" />
      <rect x="22" y="10.069" width="44" height="8.05519" fill="#5F606F" />
      <rect x="87" y="10.069" width="34" height="8.05519" fill="#5F606F" />
      <rect x="132" y="10.069" width="34" height="8.05519" fill="#5F606F" />
      <rect x="177" y="10.069" width="34" height="8.05519" fill="#5F606F" />
      <rect
        opacity="0.66"
        x="238"
        y="7.04828"
        width="34"
        height="14.0966"
        rx="2"
        fill="url(#paint0_linear_3537_4275)"
      />
      <rect width="14" height="28.1932" fill="#292C3B" />
      <path
        d="M12.6001 10.5724V14.8556L11.0138 13.238L6.27342 18.0723L4.82022 16.5903L2.4276 19.0304L1.40002 17.9824L4.82022 14.4944L6.27342 15.9764L9.98626 12.19L8.40007 10.5724H12.6001Z"
        fill="#383C4B"
      />
      <path
        d="M284.204 16.3379C283.52 15.5773 283.52 14.4227 284.204 13.6621L292 5V25L284.204 16.3379Z"
        fill="#AEE3FA"
      />
      <rect x="291" y="13" width="9" height="4" fill="#AEE3FA" />
      <g opacity="0.5">
        <rect x="49" y="34.2345" width="196" height="18.1242" fill="#323847" />
        <rect x="64.4" y="40.7075" width="30.8" height="5.17833" fill="#383C4B" />
        <rect x="109.9" y="40.7075" width="23.8" height="5.17833" fill="#383C4B" />
        <rect x="141.4" y="40.7075" width="23.8" height="5.17833" fill="#383C4B" />
        <rect x="172.9" y="40.7075" width="23.8" height="5.17833" fill="#383C4B" />
        <rect x="215.6" y="38.7656" width="23.8" height="9.06208" rx="2" fill="#292C3B" />
        <rect x="49" y="34.2345" width="9.8" height="18.1242" fill="#292C3B" />
        <path
          d="M57.82 41.0311V43.7846L56.7096 42.7446L53.3914 45.8524L52.3741 44.8997L50.6993 46.4683L49.98 45.7946L52.3741 43.5524L53.3914 44.5051L55.9903 42.071L54.88 41.0311H57.82Z"
          fill="#383C4B"
        />
      </g>
      <g opacity="0.5">
        <rect x="76" y="56.8692" width="142" height="13.1308" fill="#323847" />
        <rect x="87.1571" y="61.5588" width="22.3143" height="3.75165" fill="#383C4B" />
        <rect x="120.121" y="61.5588" width="17.2429" height="3.75165" fill="#383C4B" />
        <rect x="142.943" y="61.5588" width="17.2429" height="3.75165" fill="#383C4B" />
        <rect x="165.764" y="61.5588" width="17.2429" height="3.75165" fill="#383C4B" />
        <rect x="196.7" y="60.1519" width="17.2429" height="6.56539" rx="2" fill="#292C3B" />
        <rect x="76" y="56.8692" width="7.1" height="13.1308" fill="#292C3B" />
        <path
          d="M82.39 61.7932V63.7881L81.5855 63.0347L79.1815 65.2863L78.4445 64.596L77.2311 65.7325L76.71 65.2444L78.4445 63.6199L79.1815 64.3101L81.0644 62.5466L80.26 61.7932H82.39Z"
          fill="#383C4B"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3537_4275"
          x1="238"
          y1="14.0966"
          x2="272"
          y2="14.0966"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A6CCDC" />
          <stop offset="1" stopColor="#C0E9FA" />
        </linearGradient>
      </defs>
    </svg>
  )
}

interface LucciaLogoProps {
  size?: number
  variant?: 'dark' | 'light'
  className?: string
}

export function LucciaLogo({ size = 80, variant = 'dark', className }: LucciaLogoProps) {
  const color = variant === 'dark' ? '#2B4A3E' : '#F5F0E8'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Luccia Bar & Café"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="94" fill="none" stroke={color} strokeWidth="2.5" />
      {/* Inner decorative ring */}
      <circle cx="100" cy="100" r="86" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />

      <defs>
        {/* Top arc: sweeps through the upper half, left to right */}
        <path id="lucciaTopArc" d="M 20,100 A 80,80 0 0,1 180,100" />
        {/* Bottom arc: sweeps through the lower half, left to right */}
        <path id="lucciaBottomArc" d="M 32,114 A 68,68 0 0,0 168,114" />
      </defs>

      {/* "LUCCIA" on top arc */}
      <text
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="22"
        letterSpacing="9"
        fill={color}
        fontWeight="600"
      >
        <textPath href="#lucciaTopArc" startOffset="50%" textAnchor="middle">
          LUCCIA
        </textPath>
      </text>

      {/* "bar & café" on bottom arc */}
      <text
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="13"
        letterSpacing="3"
        fill={color}
      >
        <textPath href="#lucciaBottomArc" startOffset="50%" textAnchor="middle">
          bar &amp; café
        </textPath>
      </text>

      {/* Coffee cup — centered at (100, 95) */}
      <g transform="translate(100, 96)" fill={color}>
        {/* Steam */}
        <path d="M-7,-30 Q-4,-38 -7,-45" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M0,-28 Q3,-36 0,-43" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7,-30 Q10,-38 7,-45" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        {/* Cup body */}
        <path d="M-20,-18 L-16,18 Q-16,23 -11,23 L11,23 Q16,23 16,18 L20,-18 Z" />
        {/* Handle */}
        <path d="M16,-6 Q30,-6 30,8 Q30,22 16,22" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
        {/* Saucer */}
        <ellipse cx="0" cy="27" rx="24" ry="5" />
      </g>
    </svg>
  )
}

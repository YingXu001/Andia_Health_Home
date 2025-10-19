export default function Logo({ size = 22 }) {
  // Minimal inline SVG logo (replace with your brand mark if you prefer)
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5cc2ff"/>
          <stop offset="1" stopColor="#8b5cff"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#g)" opacity="0.12"/>
      <path d="M20 60 C30 30, 70 30, 80 60" stroke="url(#g)" strokeWidth="6" fill="none"/>
      <circle cx="35" cy="50" r="6" fill="url(#g)"/>
      <circle cx="65" cy="50" r="6" fill="url(#g)"/>
    </svg>
  )
}

interface WaveDividerProps {
  fill: string
  flip?: boolean
}

export function WaveDivider({ fill, flip = false }: WaveDividerProps) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-12 sm:h-20 block"
      style={flip ? { marginBottom: '-1px' } : { marginTop: '-1px' }}
    >
      {flip ? (
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill={fill} />
      ) : (
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill={fill} />
      )}
    </svg>
  )
}

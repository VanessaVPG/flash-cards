export interface ProgressCircleProps {
  progress: number;
}

export function ProgressCircle({ progress }: ProgressCircleProps) {
  return (
    <div className="w-6 h-6">

    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle
        className="text-rust-200 stroke-rust-100"
        stroke-width="10"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      ></circle>
      <circle
        className="text-rust-700  progress-ring__circle stroke-rust-700"
        stroke-width="10"
        stroke-linecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke-dashoffset="calc(400 - (400 * 45) / 100)"
      >

      </circle>

    </svg>
    </div>
  )
}
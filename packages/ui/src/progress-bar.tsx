import * as Progress from '@radix-ui/react-progress';
import { createContext, useContext } from "react";


const ProgressContext = createContext({} as {
  max: number;
  now: number;
});

interface ProgressProps {
  children: React.ReactNode;
  max: number;
  now: number;
}

export function ProgressContainer({ children, max, now }: ProgressProps) {
  return (
    <div className="flex items-center w-full px-8 gap-3">
      <ProgressContext.Provider value={{ max, now }}>
        {children}
      </ProgressContext.Provider>
    </div>
  )
}

export function ProgressBar() {
  const { max, now } = useContext(ProgressContext);
  return (
    <Progress.Root className="w-full flex relative h-3 bg-rust-950 rounded-full">
      <Progress.Indicator className="absolute left-0 transition-all bg-rust-50 h-3 rounded-full" style={{ width: `${Math.round(now * 100 / max)}%` }} />

    </Progress.Root>
  )
}

export function ProgressIndicator() {
  const { max, now } = useContext(ProgressContext);

  return (
    <span className="font-mono font-bold text-sm">{String(now).padStart(2, '0')}/{max}</span>

  )
}
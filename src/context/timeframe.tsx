import { createContext, ReactNode, useContext, useState } from 'react';
import { Timeframe } from '@/types';

interface TimeframeContextType {
  timeframe: Timeframe;
  handleTimeframe: (tf: Timeframe) => void;
}

const TimeframeContext = createContext<TimeframeContextType | null>(null);

export function TimeframeProvider({ children }: { children: ReactNode }) {
  const [timeframe, setTimeframe] = useState<Timeframe>('daily');
  const handleTimeframe = (tf: Timeframe) => setTimeframe(tf);
  return (
    <TimeframeContext.Provider
      value={{
        timeframe,
        handleTimeframe,
      }}
    >
      {children}
    </TimeframeContext.Provider>
  );
}

export const useTimeframe = () => {
  const context = useContext(TimeframeContext);
  if (!context) {
    throw new Error(
      'useTimeframe has to be used within <TimeframeContext.Provider>'
    );
  }
  return context;
};

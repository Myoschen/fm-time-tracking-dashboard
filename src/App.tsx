import Attribution from '@/components/Attribution';
import Dashboard from '@/components/Dashboard';
import { TimeframeProvider } from './context/timeframe';

function App() {
  return (
    <TimeframeProvider>
      <div className="min-h-screen py-8 flex flex-col justify-center items-center gap-6 font-rubik bg-very-dark-blue text-white">
        <Dashboard />
        <Attribution author="Myos" link="https://github.com/Myoschen" />
      </div>
    </TimeframeProvider>
  );
}

export default App;

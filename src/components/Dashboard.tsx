import ProfileCard from './ProfileCard';
import TrackingCard from './TrackingCard';
import avatar from '@/assets/images/image-jeremy.png';
import dashboardData from '@/data.json';
import { Intent } from '@/types';
import { useTimeframe } from '@/context/timeframe';

function Dashboard() {
  const { timeframe } = useTimeframe();

  return (
    <main className="max-w-xs md:max-w-5xl w-full px-4 mx-auto grid gap-8 md:grid-cols-4">
      <ProfileCard name="Jeremy Robson" avatar={avatar} />
      {dashboardData.map((data) => (
        <TrackingCard
          key={data.title}
          intent={data.title.toLowerCase() as Intent}
          title={data.title}
          type={timeframe}
          timeframe={data.timeframes[timeframe]}
        />
      ))}
    </main>
  );
}

export default Dashboard;

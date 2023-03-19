import { useTimeframe } from '@/context/timeframe';
import { Timeframe } from '@/types';
import Button from './Button';

interface Props {
  name: string;
  avatar: string;
}

function ProfileCard({ name, avatar }: Props) {
  const { timeframe, handleTimeframe } = useTimeframe();

  return (
    <div className="bg-dark-blue rounded-xl md:row-span-2">
      <div className="px-8 py-6 md:px-6 md:pb-14 flex md:flex-col justify-center md:justify-start items-center md:items-start gap-4 md:gap-8 bg-blue rounded-xl">
        <img
          className="w-16 h-16 border-4 border-white rounded-full"
          src={avatar}
          alt="avatar"
        />
        <div>
          <span className="font-normal text-xs text-white/50">Report for</span>
          <h1 className="font-light text-xl md:text-4xl">{name}</h1>
        </div>
      </div>
      <div className="flex md:flex-col md:items-start md:gap-4 justify-between items-center px-8 md:px-6 py-4">
        {['Daily', 'Weekly', 'Monthly'].map((text) => (
          <Button
            key={text}
            label={text}
            handler={() => handleTimeframe(text.toLowerCase() as Timeframe)}
            active={text.toLowerCase() === timeframe}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;

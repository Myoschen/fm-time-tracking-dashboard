import { cva, VariantProps } from 'class-variance-authority';
import { Timeframe } from '@/types';
import Icon from './Icon';

const TrackingCardStyles = cva('rounded-xl overflow-hidden md:col-span-1', {
  variants: {
    intent: {
      work: 'bg-work',
      play: 'bg-play',
      exercise: 'bg-exercise',
      social: 'bg-social',
      study: 'bg-study',
      'self care': 'bg-self-care',
    },
  },
  defaultVariants: {
    intent: 'work',
  },
});

interface Props extends VariantProps<typeof TrackingCardStyles> {
  title: string;
  type: Timeframe;
  timeframe: {
    current: number;
    previous: number;
  };
}

function TrackingCard({ intent, title, type, timeframe }: Props) {
  const previousPeriodText = (type: Timeframe) => {
    switch (type) {
      case 'daily':
        return `Yesterday - ${timeframe.previous}hrs`;
      case 'weekly':
        return `Last week - ${timeframe.previous}hrs`;
      case 'monthly':
        return `Last month - ${timeframe.previous}hrs`;
    }
  };

  return (
    <div className={TrackingCardStyles({ intent })}>
      <div className="w-16 h-16 ml-auto mr-4 -mt-2">
        <Icon type={intent!} />
      </div>
      <div className="relative px-6 py-8 -mt-8 rounded-xl bg-dark-blue hover:bg-desaturated-blue transition-colors duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">{title}</h2>
          <button
            className="fill-pale-blue hover:fill-white transition-colors duration-300 ease-in-out"
            type="button"
          >
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex md:flex-col md:items-start justify-between items-center gap-2">
          <p className="text-3xl md:text-4xl font-light">
            {timeframe.current}hrs
          </p>
          <p className="text-xs text-pale-blue">{previousPeriodText(type)}</p>
        </div>
      </div>
    </div>
  );
}

export default TrackingCard;

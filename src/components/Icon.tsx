import exerciseSvg from '@/assets/images/icon-exercise.svg';
import playSvg from '@/assets/images/icon-play.svg';
import selfCareSvg from '@/assets/images/icon-self-care.svg';
import socialSvg from '@/assets/images/icon-social.svg';
import studySvg from '@/assets/images/icon-study.svg';
import workSvg from '@/assets/images/icon-work.svg';

interface Props {
  type: 'work' | 'play' | 'social' | 'exercise' | 'study' | 'self care';
}

function Icon({ type }: Props) {
  switch (type) {
    case 'work':
      return <img src={workSvg} alt="work icon" />;
    case 'play':
      return <img src={playSvg} alt="play icon" />;
    case 'social':
      return <img src={socialSvg} alt="social icon" />;
    case 'exercise':
      return <img src={exerciseSvg} alt="exercise icon" />;
    case 'study':
      return <img src={studySvg} alt="study icon" />;
    case 'self care':
      return <img src={selfCareSvg} alt="self care icon" />;
  }
}

export default Icon;

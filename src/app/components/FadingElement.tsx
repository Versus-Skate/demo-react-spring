import React from 'react';
import Image from 'next/image';
import { animated, easings, useSpring } from '@react-spring/web';
import FadingText from './FadingText';
import FadingCalDay from './FadingCalDay';


export default function FadingElement({ type, item }: { type: 'messenger' | 'imessage' | 'instagram' | 'ical', item: any }) {

  const springProps = useSpring({
    from: {
      textSize: 0,
      top: 0,
      opacity: 1,
    },
    to: [{
      textSize: 12,
      top: -812 + 60 + 16,
      opacity: 0,
    }],
    config: {
      easing: easings.easeInCirc,
      duration: 3000,
    },
  });

  return (
    <animated.div
      className={`
        absolute flex
        min-w-[260px] 
        -mt-[100px]
      `}
      style={{ ...springProps }}
    >
      {['imessage', 'messenger'].indexOf(type) !== -1 ? (
        <FadingText author={item.author} type={type as 'messenger' | 'imessage'} text={item.content} />
      ) : (type === 'ical') ? (
        <FadingCalDay text={item.content} type={type} datetime={item.datetime} />
      ) : (
        <div></div>
      )}

    </animated.div>
  );
};

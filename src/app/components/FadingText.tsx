import React from 'react';
import Image from 'next/image';
import { animated, easings, useSpring } from '@react-spring/web';

import momAvatar from './mom-avatar.png';


export default function FadingText({ text, author }: { text: string, author: string }) {

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
        left-0 -mt-[100px]
        bg-[#0078FF] 
        px-4 py-2 rounded-[20px]
      `}
      style={{ ...springProps }}
    >
      <div className='absolute flex flex-col -left-12 top-0'>
        <Image
          src={momAvatar}
          alt='Mom avatar'
          className='aspect-square rounded-full'
          width={48}
          height={48}
          layout='fixed'
        />
        <span className='text-center text-xs'>Mom</span>
      </div>
      <div>{text}</div>
    </animated.div>
  );
};

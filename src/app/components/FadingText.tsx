import React from 'react';
import Image from 'next/image';
import { animated, easings, useSpring } from '@react-spring/web';

import momAvatar from './mom-avatar.jpg';
import jonasAvatar from './jonas-avatar.jpg';
import mahdiAvatar from './mahdi-avatar.jpg';
import magnusAvatar from './magnus-avatar.jpg';

const getAvatar = (name: string) => {
  switch (name) {
    case 'Magnus':
      return magnusAvatar;
    case 'Mahdi':
      return mahdiAvatar;
    case 'Jonas':
      return jonasAvatar;
    case 'Mom':
      return momAvatar;
  }
}

const getBg = (type: 'messenger' | 'imessage' | 'instagram' | 'ical') => {
  switch (type) {
    case 'imessage':
      return 'bg-[#ebebeb]';
    case 'messenger':
      return 'bg-[#0084ff]';
    case 'instagram':
      return 'bg-[#fff]';
    case 'ical':
      return 'bg-[#fff]';
  }

}

const getTextColor = (type: 'messenger' | 'imessage' | 'instagram' | 'ical') => {
  switch (type) {
    case 'imessage':
      return 'text-[#272727]';
    case 'messenger':
      return 'text-[#fff]';
    case 'instagram':
      return 'text-[#272727]';
    case 'ical':
      return 'text-[#272727]';
  }
}


export default function FadingText({ type, text, author }: { type: 'messenger' | 'imessage' | 'instagram' | 'ical', text: string, author: any }) {

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
        ${getBg(type)}
        px-4 py-2 rounded-[20px]
      `}
      style={{ ...springProps }}
    >
      <div className='absolute flex flex-col -left-10 top-1'>
        <Image
          src={getAvatar(author.name)!}
          alt={`${author.name} avatar`}
          className='aspect-square rounded-full'
          width={32}
          height={32}
          layout='fixed'
          placeholder='blur'
        />
        <span className='text-center text-xs text-white/60'>{author.name}</span>
      </div>
      <div 
        className={`
          ${ getTextColor(type) }
        `}
      >
        {text}
      </div>
    </animated.div>
  );
};

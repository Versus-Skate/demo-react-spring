import { animated, easings, useSpring } from '@react-spring/web';
import React, { useState } from 'react';


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
      className='absolute left-0 bg-[#0078FF] px-4 py-2 rounded-[20px] w-[260px] -mt-[100px]'
      style={{ ...springProps }}
    >
      {text}
    </animated.div>
  );
};

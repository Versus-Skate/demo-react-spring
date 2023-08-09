import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';


export default function FadingText({ text }: { text: string }) {

  const springProps = useSpring({
    from: {
      textSize: 0,
      top: 0,
      opacity: 1,
    },
    to: {
      textSize: 12,
      top: -812 + 60 + 16,
      opacity: 0,
    },
    config: {
      duration: 3000,
    },
  });

  return (
    <animated.div 
      className='absolute top-0 left-0 bg-[#0078FF] px-4 py-2 rounded-full'
      style={{ ...springProps }}
    >
      {text}
    </animated.div>
  );
};

"use client";
import { animated, useSprings, useSpringRef } from '@react-spring/web';
import Image from 'next/image';

import bubblePerson1 from './bubble-person-1.jpg';
import bubblePerson2 from './bubble-person-2.jpg';
import bubblePerson3 from './bubble-person-3.jpg';
import bubblePerson4 from './bubble-person-4.jpg';
import { useEffect, useLayoutEffect } from 'react';

const AVATARS = [
  {
    text: "He\'s so cute!",
  },
  {
    text: "💕",
  }, {
    text: `emma has to watch w us`,
  }, {
    text: "who\'s that boy?!",
}];


export default function AvatarsPoppin() {
  const startsAfter = computeStartAfters();
  const loopDurations = computeLoopDuration();
  
  const api = useSpringRef();
  const [springs] = useSprings(AVATARS.length * 2, (index) => ({
    ref: api,
    from: from(),
    to: to(index),
    config: {
      duration: duration(index),
    },
  }));

  useLayoutEffect(() => {
    animateAtIndex(0, api, startsAfter, loopDurations);
    animateAtIndex(1, api, startsAfter, loopDurations);
    animateAtIndex(2, api, startsAfter, loopDurations);
    animateAtIndex(3, api, startsAfter, loopDurations);
  }, []);

  const animateAtIndex = (coupleIndex: number, api: any, startsAfter: any, loopDurations: any) => {
    let prevTimestamp: number | null = null;
    let animationId: number | null = null;
    let hasStarted = false;
    const springIndexes = [coupleIndex * 2, coupleIndex * 2 + 1];
  
    const animate = (timestamp: number) => {
      if (!prevTimestamp) {
        prevTimestamp = timestamp;
        hasStarted = false;
      }

      const progress = timestamp - prevTimestamp;

      if (!hasStarted && progress > startsAfter[coupleIndex]) {
        hasStarted = true;
        prevTimestamp = timestamp;
        apiStart(api, springIndexes);
      } else if (hasStarted && progress > loopDurations[coupleIndex]) {
        prevTimestamp = timestamp;
        apiStart(api, springIndexes);
      }

      animationId = requestAnimationFrame(animate);
    };
  
    animationId = requestAnimationFrame(animate);
  
    return () => cancelAnimationFrame(animationId!);
  };

  const handleOnClick = () => {
    apiStart(api, [1, 3, 5, 7]);
  }

  return (
    <main className='flex items-center gap-4 h-screen w-full justify-center'>
      {AVATARS.map((_, index) => (
        <div 
          key={index}
          className='flex flex-col items-center relative'
          onClick={handleOnClick}
        >
          <Text
            spring={springs[index * 2 + 1]}
            text={AVATARS[index].text}
          />
          <Avatar
            spring={springs[index * 2]}
            index={index}
          />
        </div>
      ))}
    </main>
  );
}

const Text = ({ text, spring }: { text: string, spring: any }) => {
  return (
    <animated.div
      className={`
        absolute
        -top-16
        w-[100px]
        h-[46px]
        text-[15px] text-center
        align-text-bottom
        flex
        items-end
        justify-center
      `}
      style={{
        y: spring.textY,
        opacity: spring.textOpacity,
      }}
    >
      <span>
        {text}
      </span>
    </animated.div>
  );
};

const Avatar = ({ index, spring }: { index: number, spring: any }) => {

  const getImage = (index: number) => {
    switch (index) {
      case 0:
        return bubblePerson1;
      case 1:
        return bubblePerson2;
      case 2:
        return bubblePerson3;
      case 3:
        return bubblePerson4;
    }
  }


  return (
    <animated.div
      style={{
        y: spring.avatarY,
      }}
    >
      <Image
        src={getImage(index)!}
        alt={'Bubble person ' + index}
        width={70}
        height={70}
        className="rounded-full w-[70px] h-[70px]"
        objectFit='cover'
        placeholder='blur'
      />
    </animated.div>
  );
};


/**
 * Animation utils
 */

const isAvatar = (index: number) => index % 2 === 0;

const from = () => ({
  textY: 0,
  textOpacity: 0,
  avatarY: 0,
});

const to = (index: number) => isAvatar(index) ?
  [{
    avatarY: -8,
  }, {
    avatarY: 0,
  }]
  : [{
    textY: 0,
    textOpacity: 1,
    config: {
      duration: 0,
    },
  }, {
    textY: -60,
    textOpacity: 0,
  }]

const duration = (index: number) => isAvatar(index) ? 100 : 2000;

const apiStart = (api: any, indexes: number[]) => {
  api.start((i: number) => {
    if (!indexes.includes(i)) { return }
    return {
      from: from(),
      to: to(i),
      config: {
        duration: duration(i),
      },
    }
  });
}

const computeStartAfters = () => {
  return AVATARS.map((_, index) => Math.random() * 1000 + (index + 1) * 1000);
}

const computeLoopDuration = () => {
  const minDuration = 4000;
  return [Math.random() * 2000 + minDuration, Math.random() * 2000 + minDuration, Math.random() * 2000 + minDuration, Math.random() * 2000 + minDuration];
}
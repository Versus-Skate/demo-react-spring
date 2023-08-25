import Image from "next/image";

import { useSpring, animated, easings } from "@react-spring/web";
import momAvatar from './mom-avatar.jpg';
import jonasAvatar from './jonas-avatar.jpg';
import mahdiAvatar from './mahdi-avatar.jpg';
import magnusAvatar from './magnus-avatar.jpg';


const getBg = (type: 'messenger' | 'imessage') => {
  switch (type) {
    case 'imessage':
      return 'bg-[#ebebeb]';
    case 'messenger':
      return 'bg-[#0084ff]';
  }

}

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


const getTextColor = (type: 'messenger' | 'imessage') => {
  switch (type) {
    case 'imessage':
      return 'text-[#272727]';
    case 'messenger':
      return 'text-[#fff]';
  }
}

export default function FadingText({ author, type, text }: { author: any, type: 'messenger' | 'imessage', text: string }) {
  const [spring, api] = useSpring(() => ({
    from: {
      opacity: 0,
      scale: 0,
    },
    to: [{
      opacity: 1,
      scale: 1.02,
    }, {
      scale: 1,
    }],
    config: {
      duration: 100,
    }
  }));

  return (
    <animated.div
      className={`
      flex
      `}
      style={spring}
    >
      <div className='flex flex-col mr-1 items-center mt-1'>
        <Image
          src={getAvatar(author.name)!}
          alt={`${author.name} avatar`}
          className='aspect-square rounded-full'
          width={32}
          height={32}
          layout='fixed'
          placeholder='blur'
        />
        <div className='text-center text-xs text-white/60'>{author.name}</div>
      </div>
      <div>
        <div
          className={`
          ${getBg(type)}
        px-4 py-2 rounded-[20px]
          ${getTextColor(type)}
        `}
        >
          {text}
        </div>
      </div>
    </animated.div>
  );
}
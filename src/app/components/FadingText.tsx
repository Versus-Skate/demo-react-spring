import Image from "next/image";

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
  return (
    <div
      className={`
        ${getBg(type)}
        px-4 py-2 rounded-[20px]
      `}
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
          ${getTextColor(type)}
        `}
      >
        {text}
      </div>
    </div>
  );
}
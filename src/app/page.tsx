"use client";

import { useLayoutEffect, useState } from 'react';
import Image from 'next/image'

import imessageAppIcon from './imessage.svg';
import messengerAppIcon from './messenger.svg';
import instagramAppIcon from './instagram.png';
import { AppIcon } from './components/AppIcon';
import { animated, useSpring } from '@react-spring/web';
import FadingText from './components/FadingText';
import IMessageFactory from './data/iMessageItems';

const getRandomSeconds = (minimumDelay: number) => Math.floor(Math.random() * minimumDelay) + minimumDelay;

export default function Home() {
  const [iMessageItems, setIMessageItems] = useState<any[]>([]);
  const [iMessageFadingItems, setIMessageFadingItems] = useState<any[]>([]);


  useLayoutEffect(() => {
    addItemAt();
  }, []);

  const addItemAt = () => {
    let startTimestamp: number | null = null;
    let hasStarted = false;
    let animationId: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
        hasStarted = false;
      }

      const progress = timestamp - startTimestamp;
      if (!hasStarted && progress > getRandomSeconds(1000)) {
        hasStarted = true;
        startTimestamp = timestamp;
        setIMessageItems(items => [...items, { content: 'Yo' }]);
        animationId = requestAnimationFrame(animate);
      } else if (hasStarted && progress > getRandomSeconds(3000)) {
        startTimestamp = timestamp;
        setIMessageItems(items => [...items, { content: 'Yo' }]);
        animationId = requestAnimationFrame(animate);
      } else {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId!);
  }

  const handleOnClick = () => {
    const _items = [...iMessageItems];
    const fadingItem = _items.pop();

    if (fadingItem) {
      setIMessageItems(_items);
      const {id, content, author} = IMessageFactory.create();
      setIMessageFadingItems(items => [...items, <FadingText key={items.length + 1} text={content} author={author} />]);
    }
  }


  return (
    <main className="flex items-center justify-center h-screen">
      <section className="flex w-full max-w-[375px] h-full max-h-[812px] bg-black p-4">
        <div className="flex self-end items-center justify-evenly w-full h-[94px] bg-white/20 rounded-[40px]">
          <div className='relative'>
            <div
              onClick={handleOnClick}
            >
              {iMessageFadingItems}
              <AppIcon
                src={imessageAppIcon}
                alt="iMessage App Icon"
                items={iMessageItems}
              />
            </div>
          </div>
          <AppIcon
            src={messengerAppIcon}
            alt="Messenger App Icon"
          />
          <AppIcon
            src={instagramAppIcon}
            alt="Instagram App Icon"
          />
        </div>
      </section>
    </main>
  )
}

"use client";

import { useLayoutEffect, useState } from 'react';
import Image from 'next/image'

import imessageAppIcon from './imessage.svg';
import messengerAppIcon from './messenger.svg';
import instagramAppIcon from './instagram.png';
import { AppIcon } from './components/AppIcon';

const START_AFTER = 2000;
const INTERVAL = 1000000;

export default function Home() {
  const [iMessageItems, setIMessageItems] = useState<any[]>([]);

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
      if (!hasStarted && progress > START_AFTER) {
        hasStarted = true;
        startTimestamp = timestamp;
        setIMessageItems(items => [...items, {content: 'Yo'}]);
        animationId = requestAnimationFrame(animate);
      } else if (hasStarted && progress > INTERVAL) {
        startTimestamp = timestamp;
        setIMessageItems(items => [...items, {content: 'Yo'}]);
        animationId = requestAnimationFrame(animate);
      } else {
        animationId = requestAnimationFrame(animate);
      }
    };
  
    animationId = requestAnimationFrame(animate);
  
    return () => cancelAnimationFrame(animationId!);
  }


  return (
    <main className="flex items-center justify-center h-screen">
      <section className="flex w-full max-w-[375px] h-full max-h-[812px] bg-black p-4">
        <div className="flex self-end items-center justify-evenly w-full h-[94px] bg-white/20 rounded-[40px]">
          <AppIcon
            src={imessageAppIcon}
            alt="iMessage App Icon"
            items={iMessageItems}
          />
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
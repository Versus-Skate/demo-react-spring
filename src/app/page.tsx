"use client";

import { useLayoutEffect, useState } from 'react';
import Image from 'next/image'

import imessageAppIcon from './imessage.svg';
import messengerAppIcon from './messenger.svg';
import instagramAppIcon from './instagram.png';
import icalAppIcon from './ical.svg';
import { AppIcon } from './components/AppIcon';
import { animated, useSpring } from '@react-spring/web';
import FadingText from './components/FadingElement';
import IMessageFactory from './data/iMessageItems';
import MessengerFactory from './data/messengerItems';
import InstagramFactory from './data/instagramItems';
import ICalFactory from './data/iCalItems';
import FadingElement from './components/FadingElement';

const getRandomSeconds = (minimumDelay: number) => Math.floor(Math.random() * minimumDelay) + minimumDelay;

export default function Home() {
  const [iMessageItems, setIMessageItems] = useState<any[]>([]);
  const [messengerItems, setMessengerItems] = useState<any[]>([]);
  const [instagramItems, setInstagramItems] = useState<any[]>([]);
  const [iCalItems, setICalItems] = useState<any[]>([]);

  const [iMessageFadingItems, setIMessageFadingItems] = useState<any[]>([]);
  const [messengerFadingItems, setMessengerFadingItems] = useState<any[]>([]);
  const [instagramFadingItems, setInstagramFadingItems] = useState<any[]>([]);
  const [iCalFadingItems, setICalFadingItems] = useState<any[]>([]);


  useLayoutEffect(() => {
    addItemAt('imessage');
    addItemAt('messenger');
    addItemAt('instagram');
    addItemAt('ical');
  }, []);

  const updateItemList = (type: 'messenger' | 'imessage' | 'instagram' | 'ical') => {
    let newItem: any;
    switch (type) {
      case 'imessage':
        newItem = IMessageFactory.create();
        setIMessageItems(items => [...items, newItem]);
        break;
      case 'messenger':
        newItem = MessengerFactory.create();
        console.log(JSON.stringify(newItem, null, 2));
        setMessengerItems(items => [...items, newItem]);
        break;
      case 'instagram':
        newItem = InstagramFactory.create();
        setInstagramItems(items => [...items, newItem]);
        break;
      case 'ical':
        newItem = ICalFactory.create();
        setICalItems(items => [...items, newItem]);
        break;
    }

  }

  const updateFadingItems = (type: 'messenger' | 'imessage' | 'instagram' | 'ical') => {
    let _items, fadingItem: any;

    switch (type) {
      case 'imessage':
        _items = [...iMessageItems];
        fadingItem = _items.pop();
        if (fadingItem) {
          setIMessageItems(_items);
          setIMessageFadingItems(items => [...items, <FadingElement type='imessage' key={type + items.length} item={fadingItem} />]);
        }
        break;
      case 'messenger':
        _items = [...messengerItems];
        fadingItem = _items.pop();
        if (fadingItem) {
          setMessengerItems(_items);
          setMessengerFadingItems(items => [...items, <FadingElement type='messenger' key={type + items.length} item={fadingItem} />]);
        }
        break;
      case 'instagram':
        _items = [...instagramItems];
        fadingItem = _items.pop();
        if (fadingItem) {
          setInstagramItems(_items);
          setInstagramFadingItems(items => [...items, <FadingElement type='instagram' key={type + items.length} item={fadingItem} />]);
        }
        break;
      case 'ical':
        _items = [...iCalItems];
        fadingItem = _items.pop();
        if (fadingItem) {
          setICalItems(_items);
          setICalFadingItems(items => [...items, <FadingElement type='ical' key={type + items.length} item={fadingItem} />]);
        }
    }
  }

  const addItemAt = (type: 'messenger' | 'imessage' | 'instagram' | 'ical') => {
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
        updateItemList(type);
        animationId = requestAnimationFrame(animate);
      } else if (hasStarted && progress > getRandomSeconds(3000)) {
        startTimestamp = timestamp;
        updateItemList(type);
        animationId = requestAnimationFrame(animate);
      } else {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId!);
  }

  const handleOnClick = (type: 'messenger' | 'imessage' | 'instagram' | 'ical') => {
    updateFadingItems(type)
  }


  return (
    <main className="flex items-center justify-center h-screen">
      <section className="flex w-full max-w-[375px] h-full max-h-[812px] bg-black p-4">
        <div className="flex self-end items-center justify-evenly w-full h-[94px] bg-white/20 rounded-[40px]">
          <div className='relative'>
            <div
              onClick={() => handleOnClick('imessage')}
            >
              {iMessageFadingItems}
              <AppIcon
                src={imessageAppIcon}
                alt="iMessage App Icon"
                items={iMessageItems}
              />
            </div>
          </div>
          <div className='relative'>
            <div
              onClick={() => handleOnClick('messenger')}
            >
              {messengerFadingItems}
              <AppIcon
                src={messengerAppIcon}
                alt="Messenger App Icon"
                items={messengerItems}
              />
            </div>
          </div>
          <div className='relative'>
            <div
              onClick={() => handleOnClick('instagram')}
            >
              {instagramFadingItems}
              <AppIcon
                src={instagramAppIcon}
                alt="Instagram App Icon"
                items={instagramItems}
              />
            </div>
          </div>
          <div className='relative'>
            <div
              onClick={() => handleOnClick('ical')}
            >
              {iCalFadingItems}
              <AppIcon
                src={icalAppIcon}
                alt="iCal App Icon"
                items={iCalItems}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

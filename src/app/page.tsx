"use client";

import { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image'

import imessageAppIcon from './imessage.svg';
import messengerAppIcon from './messenger.svg';
import instagramAppIcon from './instagram.png';
import icalAppIcon from './ical.svg';
import { AppIcon } from './components/AppIcon';
import IMessageFactory from './data/iMessageItems';
import MessengerFactory from './data/messengerItems';
import InstagramFactory from './data/instagramItems';
import ICalFactory from './data/iCalItems';
import FadingElement from './components/FadingElement';
import isMobile from 'is-mobile';

import iPhoneSE from './iphone-se.png';
import homescreen from './homescreen-@2x.jpg';
import { animated, useSpring } from '@react-spring/web';

// Should be an iPhone SE: 320 x 568

export default function Home() {
  const [_isMobile, set_IsMobile] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(320);
  const [windowHeight, setWindowHeight] = useState<number>(568);
  const [orientation, setOrientation] = useState<OrientationType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [iMessageItems, setIMessageItems] = useState<any[]>([]);
  const [messengerItems, setMessengerItems] = useState<any[]>([]);
  const [instagramItems, setInstagramItems] = useState<any[]>([]);
  const [iCalItems, setICalItems] = useState<any[]>([]);

  const [iMessageFadingItems, setIMessageFadingItems] = useState<any[]>([]);
  const [messengerFadingItems, setMessengerFadingItems] = useState<any[]>([]);
  const [instagramFadingItems, setInstagramFadingItems] = useState<any[]>([]);
  const [iCalFadingItems, setICalFadingItems] = useState<any[]>([]);

  const [springHomescreen] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 2000,
    },
  }));


  useEffect(() => {
    const handleOrientationChange = () => {
      const orientation = window.screen.orientation || Math.abs(window.orientation) === 90 ? { type: 'landscape-primary' } : { type: 'portrait' };
      console.log(orientation)
      setOrientation(orientation.type as OrientationType);
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    }

  }, []);

  useLayoutEffect(() => {
    let orientation: OrientationType;
    if (window.screen.orientation) {
      orientation = window.screen.orientation.type as OrientationType;
    } else {
      orientation = Math.abs(window.orientation) === 90 ? 'landscape-primary' : 'portrait' as OrientationType;
    }

    setOrientation(orientation);
  }, []);

  useEffect(() => {
    const __isMobile = isMobile();
    set_IsMobile(__isMobile);
    if (__isMobile) {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [_isMobile]);

  useLayoutEffect(() => {

    const addItemAt = (type: 'messenger' | 'imessage' | 'instagram' | 'ical') => {
      let counter = {
        messenger: 0,
        imessage: 0,
        instagram: 0,
        ical: 0,
      };
      let prevTimestamp: number | null = null;
      let nextAnimationIn = _getDelay(counter[type], type);
      let animationId: number | null = null;

      const animate = (timestamp: number) => {
        if (!prevTimestamp) {
          prevTimestamp = timestamp;
        }

        const progress = timestamp - prevTimestamp; // gives normalized progress
        if (progress > nextAnimationIn) {
          updateItemList(type);
          nextAnimationIn = _getDelay(counter[type], type);
          counter[type] += 1;
          animationId = requestAnimationFrame(animate);
        } else {
          animationId = requestAnimationFrame(animate);
        }
      };

      animationId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationId!);
    }

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

  const handleOnClick = (type: 'messenger' | 'imessage' | 'instagram' | 'ical') => {
    updateFadingItems(type)
  }

  if (isLoading) {
    return (
      <main
        className="flex items-center flex-col justify-center"
        style={{
          minHeight: '100vh',
        }}
      >
        {!_isMobile && (
          <Image
            src={iPhoneSE}
            alt={'iPhone SE'}
            layout='fixed'
            className='absolute z-0'
          />
        )}
        <div // Inner Container - must have a fixed size
          className={`
          relative
          w-[320px] h-[568px]
          flex
          flex-col
          justify-center
          items-center
          px-2
          py-4
        `}
          style={{
            width: _isMobile ? windowWidth : 320,
            height: _isMobile ? windowHeight : 568,
            overflowX: _isMobile ? 'hidden' : 'visible',
          }}
        >
          <div className="text-white text-6xl z-30">
            <p></p>
          </div>
        </div>

      </main>
    )
  }

  if (_isMobile && ['landscape-primary', 'landscape-secondary'].indexOf(orientation as string) !== -1) {
    return (
      <main
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-grow text-white text-2xl mt-8">
          <p>Please rotate your device to portrait mode.</p>
        </div>
      </main>
    )
  }


  return (
    <main
      className="flex items-center flex-col justify-center"
      style={{
        minHeight: !_isMobile ? '100vh' : undefined,
      }}
    >

      {!_isMobile && (
        <Image
          src={iPhoneSE}
          alt={'iPhone SE'}
          layout='fixed'
          className='absolute z-0'
        />
      )
      }

      <animated.div // Inner Container - must have a fixed size
        className={`
          relative
          w-[320px] h-[568px]
          flex
          flex-col
          justify-end
          px-2
          py-4
        `}
        style={{
          width: _isMobile ? windowWidth : 320,
          height: _isMobile ? windowHeight : 568,
          overflowX: _isMobile ? 'hidden' : 'visible',
          ...springHomescreen
        }}
      >
        <Image
          src={homescreen}
          alt={'Homescreen'}
          layout='fill'
          objectFit='cover'
          className='absolute z-0'
          placeholder='blur'
        />

        <div
          className={`
            flex items-center justify-evenly 
            relative
            w-full h-[94px] 
            bg-white/20 rounded-[32px] z-10
          `}
        >
          <div>
            <div
              onClick={() => handleOnClick('imessage')}
              className='select-none touch-none'
            >
              {iMessageFadingItems}
              <AppIcon
                src={imessageAppIcon}
                alt="iMessage App Icon"
                items={iMessageItems}
              />
            </div>
          </div>
          <div>
            <div
              onClick={() => handleOnClick('messenger')}
              className='select-none touch-none'
            >
              {messengerFadingItems}
              <AppIcon
                src={messengerAppIcon}
                alt="Messenger App Icon"
                items={messengerItems}
              />
            </div>
          </div>
          <div>
            <div
              onClick={() => handleOnClick('instagram')}
              className='select-none touch-none'
            >
              {instagramFadingItems}
              <AppIcon
                src={instagramAppIcon}
                alt="Instagram App Icon"
                items={instagramItems}
              />
            </div>
          </div>
          <div>
            <div
              className='select-none touch-none'
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
      </animated.div>
    </main>
  )
}

const _getRandomSeconds = (range: number, minimumDelay: number) => Math.random() * range + minimumDelay;

const _getDelay = (totalItems: number, type: any) => {
  if (totalItems === 0) {
    if (type === 'imessage') {
      return _getRandomSeconds(1000, 1000);
    }
    if (type === 'messenger') {
      return _getRandomSeconds(1000, 2000);
    }
    if (type === 'instagram') {
      return _getRandomSeconds(1000, 3000);
    }
    if (type === 'ical') {
      return _getRandomSeconds(1000, 4000);
    }
  }
  const delay = _getRandomSeconds(totalItems * 1000, 2000);
  return delay;
}

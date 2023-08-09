"use client";

import { useSpring, animated, useSpringRef, easings, useChain } from "@react-spring/web"
import Image, { StaticImageData } from "next/image"
import { useEffect } from "react";

const DOT_BASE_WIDTH = 24;
const DOT_EXPAND_FACTOR = 1.1;
const DOT_RETRACT_FACTOR = 0.9;

const fromNone = () => {
  return {
    width: 0,
    height: 0,
    textSize: 0,
  }
}

const from = () => {
  return {
    width: DOT_BASE_WIDTH,
    height: DOT_BASE_WIDTH,
    textSize: 12,
  }
}

const to = () => {
  return [
    {
      width: DOT_BASE_WIDTH * DOT_RETRACT_FACTOR,
      height: DOT_BASE_WIDTH * DOT_RETRACT_FACTOR,
    }, {
      width: DOT_BASE_WIDTH * DOT_EXPAND_FACTOR,
      height: DOT_BASE_WIDTH * DOT_EXPAND_FACTOR,
    }, {
      width: DOT_BASE_WIDTH,
      height: DOT_BASE_WIDTH,
      textSize: 12,
    }]
}

export function AppIcon({ src, alt, items = [] }: { src: string | StaticImageData, alt: string, items?: { content: string }[] }) {
  const dotSpringApi = useSpringRef();
  const [spring] = useSpring(() => ({
    from: fromNone(),
    ref: dotSpringApi,
  }));

  useEffect(() => {
    dotSpringApi.start(() => ({
      from: from(),
      to: to(),
      config: {
        duration: 100,
        easing: easings.easeInCubic,
      }
    }));
  }, [dotSpringApi, items]);


  return (
    <div className='relative'>
      <div className={`
        absolute w-6 h-6 
        flex items-center justify-center
        -right-3 -top-3
      `}
      > {/* we need a fixed container to get the animation growing from center */}
        <animated.div
          className={`
          flex items-center justify-center
          bg-[#FF3B30] 
          rounded-full 
          ${(items.length) === 0 && 'hidden'}
        `}
          style={{
            ...spring
          }}
        >
          <animated.span
            className="absolute text-xs"
            style={{
              fontSize: spring.textSize,
            }}
          >
            {items?.length}
          </animated.span>
        </animated.div>
      </div>
      <Image
        src={src}
        alt={alt}
        layout='contained'
      />
    </div>
  )
}
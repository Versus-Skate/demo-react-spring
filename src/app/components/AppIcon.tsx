"use client";

import Image, { StaticImageData } from "next/image"
import { Dot } from "./Dot";
import { useSpring, useSpringRef, animated } from "@react-spring/web";

export function AppIcon({ src, alt, items = [], handleOnMouseUp = () => {} }: { src: string | StaticImageData, alt: string, items?: { content: string }[], handleOnMouseUp?: () => void }) {

  const api = useSpringRef();
  const [spring] = useSpring(() => ({
    ref: api,
    from: {
      opacity: 1,
      scale: 1,
    },
  }));

  const _handleOnMouseDown = () => {
    api.start({
      opacity: 0.8,
      scale: 0.95,
      config: {
        duration: 100,
      }
    });
  }

  const _handleOnMouseUp = () => {
    api.start({
      opacity: 1,
      scale: 1,
      config: {
        duration: 100,
      }
    });
    handleOnMouseUp();
  }

  return (
    <animated.div 
      onMouseDown={_handleOnMouseDown}
      onMouseUp={_handleOnMouseUp}
      onTouchStart={_handleOnMouseDown}
      onTouchEnd={_handleOnMouseUp}
      style={spring}
      className='relative'
    >
      <Dot
        items={items}
      />
      <Image
        className="select-none touch-none"
        src={src}
        alt={alt}
        width={60}
        height={60}
      />
    </animated.div>
  )
}
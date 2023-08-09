"use client";

import Image, { StaticImageData } from "next/image"
import { Dot } from "./Dot";
import { useSpring, useSpringRef, animated } from "@react-spring/web";

export function AppIcon({ src, alt, items = [] }: { src: string | StaticImageData, alt: string, items?: { content: string }[] }) {


  const api = useSpringRef();
  const [spring] = useSpring(() => ({
    ref: api,
    from: {
      opacity: 1,
      scale: 1,
    },
  }));

  const handleOnMouseDown = () => {
    api.start({
      opacity: 0.8,
      scale: 0.95,
      config: {
        duration: 100,
      }
    });
  }

  const handleOnMouseUp = () => {
    api.start({
      opacity: 1,
      scale: 1,
      config: {
        duration: 100,
      }
    });
  }

  return (
    <animated.div 
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      style={spring}
      className='relative'
    >
      <Dot
        items={items}
      />
      <Image
        src={src}
        alt={alt}
        width={60}
        height={60}
      />
    </animated.div>
  )
}
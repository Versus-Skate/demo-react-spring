import { animated, useSpring, useSpringRef } from "@react-spring/web";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import appleSpinner from "./apple-spinner.svg";

export default function FadingInstagramPost({ id, imgUrl, placeholderUrl }: { id: number, imgUrl: string, placeholderUrl: string }) {
  const imgRef = useRef<HTMLImageElement>(null);

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

  const placeholderApi = useSpringRef();
  const [placeholderSpring] = useSpring(() => ({
    ref: placeholderApi,
    from: {
      opacity: 1,
    },
  }));


  useEffect(() => {
    imgRef.current!.onload = () => {
      placeholderApi.start({
        from: {
          opacity: 1,
        },
        to: {
          opacity: 0,
        },
        config: {
          duration: 1000,
        }
      });
    };
  }, []);

  return (
    <animated.div
      className={
        `
          pr-4 pl-2 py-2 rounded-[10px]
        `
      }
      style={{
        ...spring,
      }}
    >
      <animated.div
        className="absolute rounded-[10px]"
        style={{
          opacity: placeholderSpring.opacity,
          width: 120,
          height: 120,
        }}
      >
        <div className="absolute animate-pulse rounded-[10px] bg-black/20 w-full h-full"/>
        <Image
          src={placeholderUrl}
          alt={'Ig post'}
          width={120}
          height={120}
          objectFit="cover"
          className="rounded-[10px]"
        />
      </animated.div>
      <Image
        ref={imgRef}
        src={imgUrl}
        alt={'Ig post'}
        width={120}
        height={120}
        objectFit="cover"
        className="rounded-[10px]"
      />
    </animated.div>
  );
}


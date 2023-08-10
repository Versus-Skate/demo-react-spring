import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";

import igPost1 from './ig-post-1.jpg';
import igPost2 from './ig-post-2.jpg';
import igPost3 from './ig-post-3.jpg';
import igPost4 from './ig-post-4.gif';
import igPost5 from './ig-post-5.jpg';
import igPost6 from './ig-post-6.jpg';
import igPost7 from './ig-post-7.jpg';
import igPost8 from './ig-post-8.jpg';
import igPost9 from './ig-post-9.jpg';
import igPost10 from './ig-post-10.jpg';
import igPost11 from './ig-post-11.jpg';
import igPost12 from './ig-post-12.jpg';
import igPost13 from './ig-post-13.jpg';
import igPost14 from './ig-post-14.jpg';
import igPost15 from './ig-post-15.jpg';
import igPost16 from './ig-post-16.jpg';
import igPost17 from './ig-post-17.jpg';
import igPost18 from './ig-post-18.jpg';
import igPost19 from './ig-post-19.jpg';
import igPost20 from './ig-post-20.jpg';


export default function FadingInstagramPost({ id }: { id: number }) {
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
      className={
        `
          pr-4 pl-2 py-2 rounded-[10px]
        `
      }
      style={{
        ...spring,
      }}
    >
      <Image
        src={getImg(id)!}
        alt={'Ig post'}
        width={120}
        height={120}
        objectFit="cover"
        className="rounded-[10px]"
      />

    </animated.div>
  );
}

const getImg = (id: number) => {
  switch (id) {
    case 1:
      return igPost1;
    case 2:
      return igPost2;
    case 3:
      return igPost3;
    case 4:
      return igPost4;
    case 5:
      return igPost5;
    case 6:
      return igPost6;
    case 7:
      return igPost7;
    case 8:
      return igPost8;
    case 9:
      return igPost9;
    case 10:
      return igPost10;
    case 11:
      return igPost11;
    case 12:
      return igPost12;
    case 13:
      return igPost13;
    case 14:
      return igPost14;
    case 15:
      return igPost15;
    case 16:
      return igPost16;
    case 17:
      return igPost17;
    case 18:
      return igPost18;
    case 19:
      return igPost19;
    case 20:
      return igPost20;
  }
}

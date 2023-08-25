import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

function formatUnixTimestamp(timestamp: number): string {
  const dtObject = new Date(timestamp * 1000);
  const formattedDate = dtObject.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return formattedDate;
}

const COLORS: ('blue' | 'green' | 'brown')[] = ['blue', 'green', 'brown'];

export default function FadingCalDay({ datetime, text }: { datetime: any, text: string }) {
  const [color, setColor] = useState<'blue' | 'green' | 'brown'>(COLORS[Math.floor(Math.random() * 3)]);

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

  const computeRight = () => {
    const width = text.length * 8 + formatUnixTimestamp(datetime).length * 4;
    return width / 2;
  }

  return (
    <animated.div className={
      `
        bg-[#FEF7EC]
        pr-4 pl-2 py-2 rounded-[10px]
        relative
      `
    } style={{
      ...spring,
      right: computeRight(),
    }}>
      <div className={`flex`}
      >
        <div className="w-1 rounded-full mr-2" 
          style={{
            backgroundColor: getBorderColor(color),
          }}
        />
        <div>
          <div
            className={`whitespace-nowrap`}
            style={{
              color: getTitleColor(color),
            }}
          >
            {text}
          </div>
          <div className="whitespace-nowrap text-xs"
            style={{
              color: getSubtitleColor(color),
            }}

          >
            {formatUnixTimestamp(datetime)}
          </div>
        </div>
      </div>
    </animated.div>
  );
}

const getBorderColor = (color: 'blue' | 'green' | 'brown') => {
  switch (color) {
    case 'blue':
      return '#0084ff';
    case 'green':
      return '#89B96B';
    case 'brown':
      return '#F3B855';
  }
}

const getTitleColor = (color: 'blue' | 'green' | 'brown') => {
  switch (color) {
    case 'blue':
      return '#0084ff';
    case 'green':
      return '#2C6A1B';
    case 'brown':
      return '#72531D';
  }
}

const getSubtitleColor = (color: 'blue' | 'green' | 'brown') => {
  switch (color) {
    case 'blue':
      return '#0084ff';
    case 'green':
      return '#89B96B';
    case 'brown':
      return '#B79E70';
  }
}
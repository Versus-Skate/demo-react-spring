import { animated, useSpring } from "@react-spring/web";

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

export default function FadingCalDay({ datetime, text }: { datetime: any, text: string }) {
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
      <div className="border-l-4 border-[#F3B855] pl-2">
      <div
        className={`text-[#72531D] whitespace-nowrap`}
      >
        {text}
      </div>
      <div className="text-[#B79E70] whitespace-nowrap text-xs">
        {formatUnixTimestamp(datetime)}
      </div>
      </div>
    </animated.div>
  );
}
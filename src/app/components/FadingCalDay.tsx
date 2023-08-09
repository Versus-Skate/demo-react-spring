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

  return (
    <animated.div className={
      `
        absolute
        -left-[120px]
        bg-[#FEF7EC]
        pr-4 pl-2 py-2 rounded-[10px]
      `
    } style={{
      ...spring,
    }}>
      <div className="border-l-4 border-[#F3B855] pl-2">
      <div
        className={`text-[#72531D]`}
      >
        {text}
      </div>
      <div className="text-[#B79E70]">
        {formatUnixTimestamp(datetime)}
      </div>
      </div>
    </animated.div>
  );
}
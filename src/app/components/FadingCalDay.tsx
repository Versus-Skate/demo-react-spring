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

export default function FadingCalDay({ datetime, type, text }: { datetime: any, type: 'messenger' | 'imessage' | 'instagram' | 'ical', text: string }) {
  return (
    <div className={
      `
        bg-[#FEF7EC]
        pr-4 pl-2 py-2 rounded-[10px]
      `
    }>
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
    </div>
  );
}
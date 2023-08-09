import Image from "next/image";

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

export default function FadingInstagramPost({ datetime, text, author, imgUrl }: { datetime: any, text: string, author: any, imgUrl: string }) {
  return (
    <div className={
      `
        absolute
        -left-[42px]
        -top-[36px]
        pr-4 pl-2 py-2 rounded-[10px]
      `
    }>
      <Image 
        src={imgUrl} 
        alt={text}
        width={120}
        height={120}
        objectFit="cover"
        className="rounded-[10px]"
      />
      
    </div>
  );
}
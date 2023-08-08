import Image from 'next/image'

import imessageAppIcon from './imessage.svg';
import messengerAppIcon from './messenger.svg';
import { AppIcon } from './components/AppIcon';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="flex w-[375px] h-[812px] bg-black p-4">
        <div className="flex self-end gap-8 items-center justify-center w-full h-[94px] bg-white/20 rounded-[40px]">
          <AppIcon
            src={imessageAppIcon}
            alt="iMessage App Icon"
            items={[{content: 'Yo'}]}
          />
          <AppIcon
            src={messengerAppIcon}
            alt="Messenger App Icon"
          />
        </div>
      </section>
    </main>
  )
}

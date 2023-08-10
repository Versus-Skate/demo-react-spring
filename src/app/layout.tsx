import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isak\'s iPhone',
  description: 'You have one unread message from Magnus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      <meta property="og:video:secure_url" content="/isak-phone-withtouch.mp4" />
      <meta property="og:video" content="/isak-phone-withtouch.mp4" />
      <meta property="og:video:type" content="video/mp4" />
      <meta property="og:title" content="Isak's iPhone" />
      <meta property="og:description" content='You have one unread message from Magnus' />
      <meta property="og:video:width" content="300" />
      <meta property="og:video:height" content="400" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/og.jpg" />
      <meta property="og:image:type" content="/og.jpg" />
      <meta property="og:image:width" content="/og.jpg" />
      <meta property="og:image:height" content="/og.jpg" />

      <meta name="twitter:card" content="player" />
      <meta name="twitter:title" content="Isak's iPhone" />
      <meta property="twitter:site" content="@ben_cotte" />
      <meta name="twitter:description" content="You have one unread message from Magnus" />
      <meta name="twitter:player" content="https://demo-react-spring.vercel.app/isak-phone-withtouch.mp4" />
      <meta name="twitter:player:width" content="1200" />
      <meta name="twitter:player:height" content="1600" />
      <meta name="twitter:image" content="https://demo-react-spring.vercel.app/og.jpg" />
      <meta name="twitter:image:alt" content="SKAM is a story about Oslo teens as they navigate friendships, relationships, and identity." />

      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}

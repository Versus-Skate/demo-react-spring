import '@/app/globals.css'

export const metadata = {
  title: "Poppin' Avatars",
  description: "How to create poppin' avatars that looks cool",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

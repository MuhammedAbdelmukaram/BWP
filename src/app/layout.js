import { Paytone_One } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

const inter = Paytone_One({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: 'Bounty Wolf Pack',
  description: 'Just wolfs hunting for bulls... AKA NFT Hedge Fund',
  category: 'technology',
  banner: 'https://i.ibb.co/ydZ8w2K/1500x500.jpg'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://i.ibb.co/Khp7SdM/favicon-32x32.png" />
      <meta property="og:image" content={metadata.banner} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.banner} />
      <link type="application/json+oembed" href="/oembed.json" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

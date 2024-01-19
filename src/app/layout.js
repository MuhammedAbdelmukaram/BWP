import { Paytone_One } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import banner from '/public/banner.png'

const inter = Paytone_One({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: 'Bounty Wolf Pack',
  description: 'Just wolfs hunting for bulls... AKA NFT Hedge Fund',
  category: 'technology',
  banner: banner,
  image:banner,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {/* Open Graph Meta Tags */}
      <link rel="icon" href="https://i.ibb.co/Khp7SdM/favicon-32x32.png" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.banner} />
      <meta property="og:type" content="website" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.banner} />
      {/* Additional Enhancements */}
      <meta name="theme-color" content="#7289DA" />
      {/* oEmbed Link (replace with your actual JSON file URL) */}

      <link type="application/json+oembed" href="/oembed.json" />
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

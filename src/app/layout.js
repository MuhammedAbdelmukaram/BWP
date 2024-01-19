import { Paytone_One } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

const inter = Paytone_One({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: 'Bounty Wolf Pack',
  description: 'Just wolfs hunting for bulls... AKA NFT Hedge Fund',
  category: 'technology',
  banner: 'https://i.ibb.co/8NdBsk2/1500x500.png'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.banner} />
      <meta property="og:type" content="website" />
      {/* Additional tags for Twitter, if you want */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.banner} />
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

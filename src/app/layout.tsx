import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rohit [ taco-man ]',
  description: 'Portfolio website of Rohit',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Head>
          <meta property="og:title" content="Rohit [ taco-man ]" />
          <meta
            property="og:description"
            content="Portfolio website of Rohit"
          />
          <meta property="og:url" content="https://taco-man.in" />
          <meta
            property="og:site_name"
            content="Rohit [ taco-man ]"
          />
          <meta property="og:image" content="/preview-image.png" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="Rohit : taco-man" />
          <meta name="twitter:title" content="Rohit [ taco-man ]" />
          <meta
            name="twitter:description"
            content="Portfolio website of Rohit"
          />
          <meta name="twitter:image" content="/preview-image.png" />
        </Head>
      </head>
      <body className={`${inter.className} bg-dark-green`}>
        {children}
      </body>
    </html>
  )
}

import { Footer, Header } from '@/components'

import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import favicon from '../../public/favicon.ico'
import './globals.css'
import PageTransition from '@/components/PageTransition/PageTransition'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edson Marcelo | Desenvolvedor React & Next.js',
  description:
    'desenvolvedor de software utilizando javascript com react.js e next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-pt-12">
      <head>
        <link rel="icon" type="image/x-icon" href={favicon.src} />
      </head>
      <body className={inter.className}>
        <PageTransition>
          <div className="flex flex-col h-full">
            <Header />
            <main className="flex flex-col gap-2 bg-slate-100 flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </PageTransition>
      </body>
      <GoogleAnalytics gaId="G-6FPHCH47VR" />
    </html>
  )
}

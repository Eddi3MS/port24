import { Footer, Header } from '@/components'
import { Certificates, Contact, Experience, Hero, Projects } from '@/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-2 bg-slate-100 min-h-dvh">
        <div className="max-w-5xl mx-auto px-4 grid gap-8">
          <Hero />
          <Experience />
        </div>
        <Certificates />
        <div className="max-w-5xl mx-auto px-4 grid gap-8">
          <Projects />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}


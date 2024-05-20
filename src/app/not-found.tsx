import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-4">
      <h2>Página Não Encontrada.</h2>

      <Link
        href="/"
        className="inline-flex bg-blue-500 px-4 py-2 text-white uppercase hover:bg-blue-400 transition-colors"
      >
        Volte ao inicio
      </Link>
    </section>
  )
}

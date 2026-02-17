import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/50 rounded-3xl overflow-hidden border border-slate-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight">
          Stories that <span className="text-blue-600">think</span>.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
          Write, read, and connect. ThinkPen is your place for ideas and thoughtful posts.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-colors"
          >
            Explore posts
          </Link>
          <Link
            to="/create"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
          >
            Start writing
          </Link>
        </div>
      </div>
    </section>
  )
}

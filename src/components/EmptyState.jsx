import { Link } from 'react-router-dom'

export default function EmptyState({ title = 'No posts found', message, actionLabel = 'Go home', actionTo = '/' }) {
  return (
    <div className="text-center py-16 px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      {message && <p className="mt-2 text-slate-500 max-w-sm mx-auto">{message}</p>}
      <Link
        to={actionTo}
        className="mt-6 inline-flex items-center px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
      >
        {actionLabel}
      </Link>
    </div>
  )
}

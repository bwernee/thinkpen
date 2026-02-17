export default function LoadMore({ onClick, loading, hasMore }) {
  if (!hasMore) return null
  return (
    <div className="flex justify-center mt-10">
      <button
        type="button"
        onClick={onClick}
        disabled={loading}
        className="px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  )
}

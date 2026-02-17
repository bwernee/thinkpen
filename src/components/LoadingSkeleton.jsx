export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-video bg-slate-200" />
      <div className="p-5 sm:p-6">
        <div className="h-3 w-16 rounded bg-slate-200" />
        <div className="mt-2 h-5 w-full rounded bg-slate-200" />
        <div className="mt-2 h-5 w-4/5 rounded bg-slate-200" />
        <div className="mt-2 h-4 w-full rounded bg-slate-100" />
        <div className="mt-2 h-4 w-3/4 rounded bg-slate-100" />
        <div className="mt-4 flex justify-between">
          <div className="h-4 w-24 rounded bg-slate-100" />
          <div className="h-4 w-20 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  )
}

export function CardGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}

export function Spinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-10 h-10 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  )
}

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-800">About ThinkPen</h1>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          ThinkPen is a modern blogging platform built for writers and readers who value clarity and simplicity.
          Share your ideas, technical insights, and stories in a clean, distraction-free environment.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Whether you're documenting your learning journey, sharing tutorials, or publishing essays,
          ThinkPen gives you the tools to write and connect with a community of thoughtful readers.
        </p>
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800">Our values</h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span><strong>Clarity</strong> — Clean design and readable typography</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span><strong>Simplicity</strong> — Focus on writing, not configuration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span><strong>Community</strong> — Comments, likes, and connection</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

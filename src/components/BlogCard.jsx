import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  const { id, title, excerpt, image, author, date, category, readTime, likes } = post

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <Link to={`/post/${id}`} className="block">
        <div className="aspect-video overflow-hidden bg-slate-100">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5 sm:p-6">
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{category}</span>
          <h2 className="mt-2 text-lg font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
          <p className="mt-2 text-sm text-slate-500 line-clamp-2">{excerpt}</p>
          <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
            <span>{author}</span>
            <span>{date}</span>
          </div>
          <div className="mt-2 flex gap-4 text-xs text-slate-400">
            <span>{readTime} min read</span>
            {likes != null && <span>{likes} likes</span>}
          </div>
        </div>
      </Link>
    </article>
  )
}

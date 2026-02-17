import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import LikeCommentSection from '../components/LikeCommentSection'
import { Spinner } from '../components/LoadingSkeleton'
import { getPostById, toggleLike, addComment } from '../services/blogService'
import { useAuth } from '../context/AuthContext'

function renderMarkdown(text) {
  if (!text) return ''
  const lines = text.split('\n')
  const out = []
  let inParagraph = false
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const h1 = line.match(/^# (.+)$/)
    const h2 = line.match(/^## (.+)$/)
    const h3 = line.match(/^### (.+)$/)
    const bold = (s) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    if (h1) {
      if (inParagraph) out.push('</p>')
      out.push(`<h1 class="text-2xl font-bold mt-6 mb-2">${bold(h1[1])}</h1>`)
      inParagraph = false
    } else if (h2) {
      if (inParagraph) out.push('</p>')
      out.push(`<h2 class="text-xl font-semibold mt-6 mb-2">${bold(h2[1])}</h2>`)
      inParagraph = false
    } else if (h3) {
      if (inParagraph) out.push('</p>')
      out.push(`<h3 class="text-lg font-semibold mt-4 mb-2">${bold(h3[1])}</h3>`)
      inParagraph = false
    } else if (line.trim() === '') {
      if (inParagraph) out.push('</p>')
      inParagraph = false
    } else {
      if (!inParagraph) out.push('<p class="my-2 leading-relaxed">')
      out.push(bold(line) + (i < lines.length - 1 ? '<br/>' : ''))
      inParagraph = true
    }
  }
  if (inParagraph) out.push('</p>')
  return out.join('')
}

export default function BlogDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPostById(id)
      .then((data) => {
        if (data) setPost(data)
        else setError('Post not found')
      })
      .catch(() => setError('Failed to load post'))
      .finally(() => setLoading(false))
  }, [id])

  const handleLike = () => {
    if (!post) return
    toggleLike(post.id).then((updated) => updated && setPost(updated))
  }

  const handleComment = (payload) => {
    if (!post) return Promise.resolve()
    return addComment(post.id, payload).then((updated) => updated && setPost(updated))
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Spinner />
      </main>
    )
  }

  if (error || !post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">{error || 'Post not found'}</h1>
          <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">Back to home</Link>
        </div>
      </main>
    )
  }

  const contentHtml = renderMarkdown(post.content || '')

  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-700 mb-6 inline-block">← Back to posts</Link>
        <header>
          <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">{post.category}</span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4">
            <img src={post.authorAvatar} alt="" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <span className="font-medium text-slate-800">{post.author}</span>
              <div className="text-sm text-slate-500">{post.date} · {post.readTime} min read</div>
            </div>
          </div>
          {user && (
            <Link
              to={`/edit/${post.id}`}
              className="mt-4 inline-flex items-center px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-sm font-medium"
            >
              Edit post
            </Link>
          )}
        </header>
        <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-slate-100">
          <img src={post.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="mt-8 prose-custom text-slate-700"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <div className="mt-12">
          <LikeCommentSection post={post} onLike={handleLike} onComment={handleComment} />
        </div>
      </article>
    </main>
  )
}

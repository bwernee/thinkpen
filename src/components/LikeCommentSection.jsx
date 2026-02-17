import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function simpleMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />')
}

export default function LikeCommentSection({ post, onLike, onComment }) {
  const [commentText, setCommentText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const { user, isLoggedIn } = useAuth()
  const comments = post?.comments || []

  const handleSubmitComment = async (e) => {
    e.preventDefault()
    if (!commentText.trim() || !onComment) return
    setSubmitting(true)
    await onComment({ author: user?.name || 'Anonymous', text: commentText.trim() })
    setCommentText('')
    setSubmitting(false)
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center gap-6 mb-6">
        <button
          type="button"
          onClick={() => isLoggedIn && onLike?.()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50"
          disabled={!isLoggedIn}
        >
          <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-3.869A2 2 0 0015.56 8.943l-1.432-4.574a2 2 0 00-2.055-1.4L6 4.5v5.833z" />
          </svg>
          <span className="font-medium text-slate-700">{post?.likes ?? 0} likes</span>
        </button>
        <span className="text-slate-500 text-sm">{comments.length} comments</span>
      </div>

      {isLoggedIn && (
        <form onSubmit={handleSubmitComment} className="mb-6">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-y"
          />
          <button
            type="submit"
            disabled={!commentText.trim() || submitting}
            className="mt-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {submitting ? 'Posting...' : 'Post comment'}
          </button>
        </form>
      )}

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-slate-500 text-sm">No comments yet. Be the first!</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="py-3 border-b border-slate-100 last:border-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-800">{c.author}</span>
                <span className="text-slate-400 text-sm">{c.date}</span>
              </div>
              <p
                className="mt-1 text-slate-600 text-sm"
                dangerouslySetInnerHTML={{ __html: simpleMarkdown(c.text) }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

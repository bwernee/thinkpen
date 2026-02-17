import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RichTextEditor from '../components/RichTextEditor'
import { createPost } from '../services/blogService'
import { useAuth } from '../context/AuthContext'

export default function CreatePost() {
  const navigate = useNavigate()
  const { user, isLoggedIn } = useAuth()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('General')
  const [tags, setTags] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl font-bold text-slate-800">Sign in to write</h1>
          <p className="mt-2 text-slate-500">You need to be logged in to create a post.</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-4 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Sign in
          </button>
        </div>
      </main>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!title.trim()) {
      setError('Title is required')
      return
    }
    setSaving(true)
    try {
      const post = await createPost({
        title: title.trim(),
        excerpt: excerpt.trim() || undefined,
        content: content.trim(),
        image: image.trim() || undefined,
        author: user?.name,
        authorAvatar: undefined,
        category: category.trim() || 'General',
        tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      })
      navigate(`/post/${post.id}`)
    } catch {
      setError('Failed to create post')
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-slate-800">Create a new post</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm">{error}</div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt (optional)</label>
            <input
              type="text"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short preview for cards"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Cover image URL (optional)</label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. React, Backend"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tags (comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="react, javascript, frontend"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Content *</label>
            <RichTextEditor value={content} onChange={setContent} />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {saving ? 'Publishing...' : 'Publish'}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

import { INITIAL_POSTS } from '../data/dummyPosts'

const STORAGE_KEY = 'thinkpen_posts'

function getStoredPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length > 0) return parsed
    }
  } catch (_) {}
  return null
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}

function getPosts() {
  const stored = getStoredPosts()
  if (stored) return stored
  savePosts(INITIAL_POSTS)
  return [...INITIAL_POSTS]
}

export function getAllPosts() {
  return Promise.resolve(getPosts())
}

export function getPostById(id) {
  const posts = getPosts()
  const post = posts.find((p) => p.id === String(id))
  return Promise.resolve(post || null)
}

export function createPost({ title, excerpt, content, image, author, authorAvatar, category, tags }) {
  const posts = getPosts()
  const newPost = {
    id: String(Date.now()),
    title,
    excerpt: excerpt || content?.slice(0, 160) + '...',
    content: content || '',
    image: image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    author: author || 'Anonymous',
    authorAvatar: authorAvatar || 'https://i.pravatar.cc/100?u=anon',
    date: new Date().toISOString().slice(0, 10),
    category: category || 'General',
    tags: Array.isArray(tags) ? tags : (tags || '').split(',').map((t) => t.trim()).filter(Boolean),
    likes: 0,
    readTime: Math.max(1, Math.ceil((content?.length || 0) / 800)),
    comments: [],
  }
  posts.unshift(newPost)
  savePosts(posts)
  return Promise.resolve(newPost)
}

export function updatePost(id, updates) {
  const posts = getPosts()
  const index = posts.findIndex((p) => p.id === String(id))
  if (index === -1) return Promise.resolve(null)
  posts[index] = { ...posts[index], ...updates }
  savePosts(posts)
  return Promise.resolve(posts[index])
}

export function deletePost(id) {
  const posts = getPosts().filter((p) => p.id !== String(id))
  savePosts(posts)
  return Promise.resolve(true)
}

export function toggleLike(id) {
  const posts = getPosts()
  const post = posts.find((p) => p.id === String(id))
  if (!post) return Promise.resolve(null)
  post.likes = (post.likes || 0) + 1
  savePosts(posts)
  return Promise.resolve(post)
}

export function addComment(id, { author, text }) {
  const posts = getPosts()
  const post = posts.find((p) => p.id === String(id))
  if (!post) return Promise.resolve(null)
  const comment = {
    id: 'c' + Date.now(),
    author: author || 'Anonymous',
    text,
    date: new Date().toISOString().slice(0, 10),
  }
  post.comments = post.comments || []
  post.comments.push(comment)
  savePosts(posts)
  return Promise.resolve(post)
}

export function getCategories() {
  const posts = getPosts()
  const set = new Set(posts.map((p) => p.category).filter(Boolean))
  return ['All', ...Array.from(set).sort()]
}

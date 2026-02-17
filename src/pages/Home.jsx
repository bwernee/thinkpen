import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import LoadMore from '../components/LoadMore'
import { CardGridSkeleton, Spinner } from '../components/LoadingSkeleton'
import EmptyState from '../components/EmptyState'
import { getAllPosts, getCategories } from '../services/blogService'

const POSTS_PER_PAGE = 6

export default function Home() {
  const [posts, setPosts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [categories, setCategories] = useState(['All'])
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllPosts()
      .then((data) => {
        setPosts(data)
        setFiltered(data)
        setCategories(getCategories())
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    let result = [...posts]
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.excerpt?.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)) ||
          p.category?.toLowerCase().includes(q)
      )
    }
    if (category && category !== 'All') {
      result = result.filter((p) => p.category === category)
    }
    setFiltered(result)
    setPage(1)
  }, [posts, search, category])

  const displayed = filtered.slice(0, page * POSTS_PER_PAGE)
  const hasMore = displayed.length < filtered.length

  const loadMore = () => {
    setLoadingMore(true)
    setTimeout(() => {
      setPage((p) => p + 1)
      setLoadingMore(false)
    }, 300)
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div className="w-full sm:w-auto">
            <CategoryFilter categories={categories} active={category} onChange={setCategory} />
          </div>
        </div>

        {loading ? (
          <CardGridSkeleton count={6} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No posts found"
            message={search || category !== 'All' ? 'Try a different search or category.' : 'No posts yet. Be the first to write!'}
            actionLabel="Clear filters"
            actionTo="/"
          />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayed.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <LoadMore onClick={loadMore} loading={loadingMore} hasMore={hasMore} />
          </>
        )}
      </div>
    </main>
  )
}

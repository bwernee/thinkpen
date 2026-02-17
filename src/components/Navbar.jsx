import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, logout, isLoggedIn } = useAuth()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-slate-800 hover:text-blue-600 transition-colors">
            <span className="text-xl font-bold tracking-tight">ThinkPen</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`
                }
              >
                {label}
              </NavLink>
            ))}
            {isLoggedIn ? (
              <>
                <Link
                  to="/create"
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  Write
                </Link>
                <span className="text-sm text-slate-500">{user?.name}</span>
                <button
                  onClick={logout}
                  className="text-sm font-medium text-slate-600 hover:text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                Sign in
              </Link>
            )}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 flex flex-col gap-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            {isLoggedIn ? (
              <>
                <Link to="/create" className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg" onClick={() => setMenuOpen(false)}>Write</Link>
                <button onClick={() => { logout(); setMenuOpen(false); }} className="px-4 py-2 text-left text-slate-600 hover:bg-slate-50 rounded-lg">Logout</button>
              </>
            ) : (
              <Link to="/login" className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg" onClick={() => setMenuOpen(false)}>Sign in</Link>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}

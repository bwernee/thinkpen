import { createContext, useContext, useState, useCallback } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('thinkpen_user')
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  const login = useCallback((email, password) => {
    // Basic demo: accept any non-empty credentials
    if (!email?.trim() || !password?.trim()) return false
    const userData = { name: email.split('@')[0], email }
    setUser(userData)
    localStorage.setItem('thinkpen_user', JSON.stringify(userData))
    return true
  }, [])

  const register = useCallback((name, email, password) => {
    if (!name?.trim() || !email?.trim() || !password?.trim()) return false
    const userData = { name: name.trim(), email: email.trim() }
    setUser(userData)
    localStorage.setItem('thinkpen_user', JSON.stringify(userData))
    return true
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('thinkpen_user')
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

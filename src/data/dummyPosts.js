export const INITIAL_POSTS = [
  {
    id: '1',
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use useState, useEffect, and custom hooks to build modern React applications with cleaner, more maintainable code.',
    content: `# Getting Started with React Hooks

React Hooks revolutionized how we write components. In this post, we'll cover:

- **useState** — Managing component state
- **useEffect** — Side effects and lifecycle
- **Custom hooks** — Reusable logic

Hooks let you use state and other React features without writing a class. They're fully backward-compatible.`,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    author: 'Alex Chen',
    authorAvatar: 'https://i.pravatar.cc/100?u=alex',
    date: '2025-02-15',
    category: 'React',
    tags: ['react', 'javascript', 'hooks', 'frontend'],
    likes: 42,
    readTime: 5,
    comments: [
      { id: 'c1', author: 'Jane Doe', text: 'Great introduction!', date: '2025-02-16' },
      { id: 'c2', author: 'Bob Smith', text: 'Helped me understand useEffect better.', date: '2025-02-16' },
    ],
  },
  {
    id: '2',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Best practices for designing RESTful APIs that scale. From project structure to error handling and validation.',
    content: `# Building Scalable APIs

Designing APIs that scale requires attention to:

1. **Consistent structure** — Use a clear folder layout
2. **Validation** — Validate input with Joi or Zod
3. **Error handling** — Centralized error middleware
4. **Documentation** — OpenAPI/Swagger

We'll walk through a production-ready setup.`,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    author: 'Sam Rivera',
    authorAvatar: 'https://i.pravatar.cc/100?u=sam',
    date: '2025-02-14',
    category: 'Backend',
    tags: ['nodejs', 'api', 'rest', 'backend'],
    likes: 28,
    readTime: 7,
    comments: [],
  },
  {
    id: '3',
    title: 'Tailwind CSS: From Utility to Design System',
    excerpt: 'How to go beyond utility classes and create a consistent, maintainable design system with Tailwind.',
    content: `# Tailwind and Design Systems

Tailwind's utility-first approach can evolve into a full design system:

- **@layer components** — Reusable UI components
- **@apply** — When it makes sense
- **Design tokens** — Colors, spacing, typography

Keep utilities for one-offs; extract patterns into components.`,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    author: 'Jordan Lee',
    authorAvatar: 'https://i.pravatar.cc/100?u=jordan',
    date: '2025-02-13',
    category: 'CSS',
    tags: ['tailwind', 'css', 'design-system', 'frontend'],
    likes: 56,
    readTime: 4,
    comments: [{ id: 'c3', author: 'Alex', text: 'Love the layer approach.', date: '2025-02-14' }],
  },
  {
    id: '4',
    title: 'TypeScript Tips for Cleaner Code',
    excerpt: 'Practical TypeScript patterns that reduce bugs and improve developer experience in large codebases.',
    content: `# TypeScript Tips

Key patterns we use every day:

- **Discriminated unions** — Type-safe state machines
- **Generic constraints** — Reusable typed utilities
- **Branded types** — Safer IDs and primitives

TypeScript shines when you model your domain precisely.`,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    author: 'Alex Chen',
    authorAvatar: 'https://i.pravatar.cc/100?u=alex',
    date: '2025-02-12',
    category: 'TypeScript',
    tags: ['typescript', 'javascript', 'types'],
    likes: 31,
    readTime: 6,
    comments: [],
  },
  {
    id: '5',
    title: 'The Art of Code Review',
    excerpt: 'How to give and receive constructive feedback on code. Making code reviews productive and kind.',
    content: `# Code Review Best Practices

Effective code reviews focus on:

1. **Clarity** — Can others understand it?
2. **Intent** — Does it match requirements?
3. **Trade-offs** — Acknowledge alternatives

Be specific, suggest rather than demand, and praise good solutions.`,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    author: 'Sam Rivera',
    authorAvatar: 'https://i.pravatar.cc/100?u=sam',
    date: '2025-02-11',
    category: 'Career',
    tags: ['career', 'code-review', 'teamwork'],
    likes: 19,
    readTime: 3,
    comments: [],
  },
  {
    id: '6',
    title: 'Introduction to Modern JavaScript',
    excerpt: 'ES6+ features every developer should know: destructuring, spread, async/await, and modules.',
    content: `# Modern JavaScript

A quick tour of essential ES6+ features:

- **Destructuring** — Objects and arrays
- **Spread & rest** — Copying and variadic args
- **Async/await** — Readable async code
- **Modules** — import/export

These features are supported everywhere today.`,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    author: 'Jordan Lee',
    authorAvatar: 'https://i.pravatar.cc/100?u=jordan',
    date: '2025-02-10',
    category: 'JavaScript',
    tags: ['javascript', 'es6', 'frontend'],
    likes: 67,
    readTime: 5,
    comments: [],
  },
]

export const CATEGORIES = ['All', 'React', 'Backend', 'CSS', 'TypeScript', 'JavaScript', 'Career']

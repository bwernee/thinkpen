# ThinkPen — Modern Blog Web Application

A clean, premium, production-ready blogging platform built with **React.js**, **React Router**, and **Tailwind CSS**. ThinkPen resembles platforms like Medium and Dev.to with a minimalist design, soft shadows, rounded cards, and a light color palette.

---

## Quick Start

### Prerequisites

- **Node.js** 18+ and **npm**

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder. Serve it with any static host or:

```bash
npm run preview
```

---

## Deploy to GitHub & Vercel

### 1. Push to GitHub

If **thinkPen** is not yet a Git repo, initialize and push:

```bash
cd thinkPen
git init
git add .
git commit -m "Initial commit: ThinkPen blog app"
```

On [GitHub](https://github.com/new), create a new repository (e.g. `thinkPen`). Do **not** add a README or .gitignore (you already have them). Then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/thinkPen.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Deploy on Vercel

**Option A — Connect GitHub (recommended)**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New…** → **Project**.
3. Import your **thinkPen** repository.
4. Vercel will detect Vite. Use these settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Vercel will build and give you a live URL.

**Option B — Vercel CLI**

```bash
npm i -g vercel
cd thinkPen
vercel
```

Follow the prompts and deploy. Later pushes to `main` will auto-deploy if the project is linked to GitHub.

---

## Project Structure

```
thinkPen/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── BlogCard.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── RichTextEditor.jsx
│   │   ├── LikeCommentSection.jsx
│   │   ├── LoadMore.jsx
│   │   ├── LoadingSkeleton.jsx   # Card skeleton + Spinner
│   │   └── EmptyState.jsx
│   ├── context/
│   │   └── AuthContext.jsx       # Login/register state
│   ├── data/
│   │   └── dummyPosts.js         # Initial blog posts + categories
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── CreatePost.jsx
│   │   ├── EditPost.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── services/
│   │   └── blogService.js        # CRUD + likes/comments (localStorage)
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css                 # Tailwind + custom prose
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Component Breakdown

| Component | Role |
|-----------|------|
| **Navbar** | Sticky header with logo, nav links (Home, About, Contact), Write (when logged in), user name, Logout / Sign in. Mobile hamburger menu. |
| **Footer** | Site name, short tagline, links (Home, About, Contact), social icons (Twitter, GitHub, LinkedIn), copyright. |
| **Hero** | Homepage hero: headline, subtitle, “Explore posts” and “Start writing” CTAs. |
| **BlogCard** | Single post card: image, category, title, excerpt, author, date, read time, likes. Links to post detail. |
| **SearchBar** | Search input with icon; filters posts by title, excerpt, tags, category. |
| **CategoryFilter** | Pill buttons for “All” + dynamic categories; filters post list. |
| **RichTextEditor** | Textarea for post body with Markdown hint (headings, bold, lists). |
| **LikeCommentSection** | Like button + count; comment form (when logged in); list of comments. |
| **LoadMore** | “Load more” button for pagination; shows loading state. |
| **LoadingSkeleton** | Card skeleton grid and standalone Spinner for loading states. |
| **EmptyState** | Message + CTA when no posts match filters or list is empty. |

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, search, category filter, grid of blog cards, load more. |
| `/post/:id` | Blog Details | Full post (title, author, image, Markdown content), like/comment section, Edit link (when logged in). |
| `/create` | Create Post | Form: title, excerpt, image URL, category, tags, content. Requires login. |
| `/edit/:id` | Edit Post | Same form pre-filled; saves updates. Requires login. |
| `/about` | About | Short copy about ThinkPen and values. |
| `/contact` | Contact | Contact form (name, email, message); demo only (no backend). |
| `/login` | Login | Email + password; demo accepts any non-empty credentials. |
| `/register` | Register | Name, email, password; creates demo user in context + localStorage. |

---

## Features

- **React** functional components and hooks  
- **React Router** for navigation  
- **Tailwind CSS** for styling (light palette, rounded cards, soft shadows)  
- **Responsive** layout (mobile, tablet, desktop)  
- **Dummy data** in `src/data/dummyPosts.js`; **localStorage** for persistence (posts, user)  
- **Search** by title, excerpt, tags, category  
- **Category / tags** filter  
- **Rich text** via Markdown in content (headings, bold, lists)  
- **Like** and **comment** UI with persistence  
- **Pagination** via “Load more”  
- **Loading** skeletons and spinner  
- **Empty / error** states (no results, post not found)  
- **Auth** context: login/register (UI + basic demo auth)

---

## Tech Stack

- **React 18**
- **React Router 6**
- **Vite 7**
- **Tailwind CSS 4** (with `@tailwindcss/vite`)

---

## Data & Auth

- **Posts** are stored in `localStorage` under `thinkpen_posts`. Initial data comes from `dummyPosts.js`.  
- **User** is stored in `localStorage` under `thinkpen_user`. Login/register are demo-only (no real backend).

---

## License

MIT.
"# thinkpen" 

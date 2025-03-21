import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import EmojiPage from './EmojiPage'
import './App.css'

function App() {
  const links = [
    { to: "/", label: "Home", component: <Home /> },
    { to: "/emojis", label: "Emojis", component: <EmojiPage /> }
  ];

  return (
    <div className="max-w-3xl mx-auto p-8 text-center flex flex-col items-center justify-center">
      <nav className="mb-8">
        {links.map((link, index) => (
          <NavLink 
            key={index}
            to={link.to} 
            className={({ isActive }) => `mr-4 ${isActive ? 'text-indigo-600' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Routes>
        {links.map((link, index) => (
          <Route key={index} path={link.to} element={link.component} />
        ))}
      </Routes>
    </div>
  )
}

export default App

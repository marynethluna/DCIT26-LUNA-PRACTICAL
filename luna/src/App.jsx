import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    document.body.style.backgroundColor = darkMode ? '#020817' : '#f8fafc';
    document.body.style.color = darkMode ? '#e2e8f0' : '#0f172a';
  }, [darkMode]);

  const toggleFavorite = (userId) => {
    setFavorites((previousFavorites) =>
      previousFavorites.includes(userId)
        ? previousFavorites.filter((id) => id !== userId)
        : [...previousFavorites, userId],
    );
  };

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
          <Navbar
            favorites={favorites}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/users"
              element={
                <Users
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/users/:id"
              element={<UserDetails favorites={favorites} onToggleFavorite={toggleFavorite} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

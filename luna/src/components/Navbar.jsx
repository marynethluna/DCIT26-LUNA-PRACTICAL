import { NavLink } from 'react-router-dom';
import Button from './Button';

function Navbar({ favorites, darkMode, setDarkMode }) {
  const linkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-blue-600 text-white shadow-sm'
        : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400'
    }`;

  return (
    <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          TeamDirectory
        </NavLink>

        <div className="flex items-center gap-2 sm:gap-3">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/users" className={linkClass}>
            Users
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <span className="ml-2 hidden rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200 sm:inline-block">
            Favorites: {favorites.length}
          </span>

          <Button
            label={darkMode ? 'Light Mode' : 'Dark Mode'}
            variant="primary"
            onClick={() => setDarkMode((current) => !current)}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

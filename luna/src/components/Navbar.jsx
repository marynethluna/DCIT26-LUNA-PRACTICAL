import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* App Logo */}
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          TeamDirectory
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/users" className={navLinkClass}>
            Users
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

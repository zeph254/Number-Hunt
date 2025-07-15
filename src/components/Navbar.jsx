import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Title */}
          <div className="flex items-center space-x-2">
            <h1 className="text-white text-2xl font-bold tracking-tight hover:text-indigo-200 transition duration-300">
              Number Hunt
            </h1>
            <span className="hidden md:inline-block bg-white/20 text-xs px-2 py-1 rounded-full text-white animate-pulse">
              New Game!
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="about">About</NavLink>
            <NavLink href="leaderboard">Leaderboard</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-40 py-2' : 'max-h-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-3 px-2">
            <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
              Leaderboard
            </MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink component for desktop
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-white hover:text-indigo-200 font-medium transition duration-300"
    >
      {children}
    </a>
  );
}

// Reusable MobileNavLink component
function MobileNavLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition duration-300"
    >
      {children}
    </a>
  );
}
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

function Navbar({ theme, onThemeToggle }) {
  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Primary navigation">
        <a href="#top" className="brand" aria-label="Pooja Joijode home">
          <span className="brand-mark">PJ</span>
          <span className="brand-text">Pooja Joijode</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label="Toggle theme">
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

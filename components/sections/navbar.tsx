export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-dark/80 backdrop-blur-sm border-b border-cream/5">
      <a
        href="#"
        className="font-serif text-rose text-xl font-semibold tracking-tight"
      >
        Savri
      </a>
      <div className="flex items-center gap-6">
        <a
          href="#waitlist"
          className="text-cream/70 hover:text-cream text-sm transition-colors duration-200"
        >
          Join Waitlist
        </a>
        <a
          href="https://bit.ly/savri-chef"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream/70 hover:text-cream text-sm transition-colors duration-200"
        >
          Join as Chef
        </a>
      </div>
    </nav>
  )
}

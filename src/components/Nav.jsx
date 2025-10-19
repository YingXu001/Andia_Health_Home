import Logo from './Logo'

export default function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="Andia Health Home">
        <Logo />
        <span>Andia Health</span>
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#technology">Technology</a>
        <a href="#solutions">Solutions</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <p>© {year} Main Site. All rights reserved.</p>
      <p className="meta">
        <a href="LICENSE" rel="nofollow">License</a> · <a href="#top">Back to top</a>
      </p>
    </footer>
  )
}

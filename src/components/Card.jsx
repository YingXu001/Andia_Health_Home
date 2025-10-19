export default function Card({ title, children }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{children}</p>
    </div>
  )
}

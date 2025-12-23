export default function Citation({ id }) {
  return (
    <sup>
      <a href={`#ref-${id}`} className="citation">
        [{id}]
      </a>
    </sup>
  )
}
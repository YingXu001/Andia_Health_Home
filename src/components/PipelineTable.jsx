export default function PipelineTable() {
  const stages = ["Preclinical", "Replication", "Validation", "Launch"]

  // Fill map: which stages are filled (like your screenshot)
  // You can adjust these booleans anytime.
  const rows = [
    {
      title: "GPND-AI for Neurological diseases",
      subtitle: "Somalogic and Olink-based",
      filled: { Preclinical: true, Replication: true, Validation: true, Launch: false },
    },
    {
      title: "Parkinson-disease-specific biomarker",
      subtitle: "Unified AI/ML framework for multi-platform biomarker discovery",
      filled: { Preclinical: true, Replication: true, Validation: false, Launch: false },
    },
    {
      title: "Progression to Symptomatic AD",
      subtitle: "Age at onset prediction",
      filled: { Preclinical: true, Replication: true, Validation: false, Launch: false },
    },
    {
      title: "Brain health",
      subtitle: "Multi-omic + AI data to predict brain health",
      filled: { Preclinical: true, Replication: false, Validation: false, Launch: false },
    },
    {
      title: "Response to Alzheimer-disease treatment",
      subtitle: "Proteomic + AI to predict treatment response",
      filled: { Preclinical: true, Replication: false, Validation: false, Launch: false },
    },
  ]

  return (
    <div className="pipeWrap" aria-label="Our pipeline">
      <div className="pipeHeader">
        <h2 className="pipeTitle">Our Pipeline</h2>
        <p className="pipeNote">
          Development stages are shown as filled blocks (current or completed).
        </p>
      </div>

      {/* scroll container for small screens */}
      <div className="pipeScroll" role="region" aria-label="Pipeline stage table">
        <div className="pipeTable">
          {/* header row */}
          <div className="pipeRow pipeRowHead">
            <div className="pipeCell pipeLeft pipeHeadLeft" />
            {stages.map((s) => (
              <div key={s} className="pipeCell pipeHead">
                {s}
              </div>
            ))}
          </div>

          {/* data rows */}
          {rows.map((r) => (
            <div key={r.title} className="pipeRow">
              <div className="pipeCell pipeLeft">
                <div className="pipeProjTitle">{r.title}</div>
                <div className="pipeProjSub">{r.subtitle}</div>
              </div>

              {stages.map((s) => {
                const isFilled = !!r.filled[s]
                return (
                  <div
                    key={s}
                    className={`pipeCell pipeStage ${isFilled ? "isFilled" : ""}`}
                    aria-label={`${r.title} — ${s}: ${isFilled ? "active" : "not active"}`}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

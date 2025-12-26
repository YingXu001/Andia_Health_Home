export default function RoadmapTable() {
  const stages = ["Preclinical", "Replication", "Validation", "Launch"]

  const rows = [
    {
      title: "GPND-AI for Neurological diseases",
      subtitle: "Multi-platform supports: Somalogic-, Alamar- and Olink-based",
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
    <div className="pipeWrap" aria-label="Our roadmap">
      <div className="pipeHeader">
        <h2 className="pipeTitle">Our Roadmap</h2>
        <p className="pipeNote">
          Development milestones are shown as filled blocks (current or completed).
        </p>
      </div>

      <div className="pipeScroll" role="region" aria-label="Roadmap stage table">
        <div className="pipeTable">
          <div className="pipeRow pipeRowHead">
            <div className="pipeCell pipeLeft pipeHeadLeft" />
            {stages.map((s) => (
              <div key={s} className="pipeCell pipeHead">
                {s}
              </div>
            ))}
          </div>

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
                    aria-label={`${r.title} — ${s} milestone: ${
                      isFilled ? "active" : "planned"
                    }`}
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

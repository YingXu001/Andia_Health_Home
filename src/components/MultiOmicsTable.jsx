export default function MultiOmicsTable() {
  return (
    <div className="moTable2" aria-label="Multi-omics scale and coverage">
      {/* Row 1: KPI (4 columns) */}
      <div className="mo2Cell mo2Top">
        <div className="mo2Num">250K+</div>
        <div className="mo2Lbl">Proteomics</div>
      </div>

      <div className="mo2Cell mo2Top">
        <div className="mo2Num">100K+</div>
        <div className="mo2Lbl">Metabolomics</div>
      </div>

      <div className="mo2Cell mo2Top">
        <div className="mo2Num">2Mill+</div>
        <div className="mo2Lbl">Transcriptomics</div>
      </div>

      <div className="mo2Cell mo2Top mo2NoRight">
        <div className="mo2Num">100K+</div>
        <div className="mo2Lbl">Genotypes</div>
      </div>

      {/* Row 2: Across... (span all) */}
      <div className="mo2Cell mo2Mid mo2SpanAll">
        Across ancestries<br />
        Across platforms
      </div>

      {/* Row 3: Tissue row (span all) */}
      <div className="mo2Cell mo2Bottom mo2SpanAll">
        <div className="mo2TissueTitle">Multi-tissue</div>

        <div className="mo2TissueGrid">
          <div className="mo2Tissue">
            <div className="mo2TissueLabel">Brain</div>
            <img
              src="/icons/brain.png"
              alt="Brain tissue"
              className="mo2IconImg"
              loading="lazy"
            //   width="26"
            //   height="26"
            />
          </div>

          <div className="mo2Tissue">
            <div className="mo2TissueLabel">CSF</div>
            <img
              src="/icons/csf.png"
              alt="Cerebrospinal fluid"
              className="mo2IconImg"
              loading="lazy"
            //   width="26"
            //   height="26"
            />
          </div>

          <div className="mo2Tissue">
            <div className="mo2TissueLabel">Blood</div>
            <img
              src="/icons/blood.png"
              alt="Blood plasma"
              className="mo2IconImg"
              loading="lazy"
            //   width="26"
            //   height="26"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

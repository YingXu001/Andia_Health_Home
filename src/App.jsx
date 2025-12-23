import Nav from './components/Nav'
import Hero from './components/Hero'
import Section from './components/Section'
import Card from './components/Card'
import Footer from './components/Footer'
import Citation from './components/Citation'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />

      <main className="container">
        {/* <Section id="about" title="About Main Site"> */}
        <Section id="about" title="About Andia Health">
          <p className="lead">
            Andia Health combines <strong>multi-tissue multi-omics</strong> with its own <strong>AI agents and frameworks</strong> for precision
            Neurology-accelerating the identification of novel biomarkers, disease subtyping, patient stratification and target identification.
          </p>
          <div className="grid">
            <Card title="Multi-omics Integration">
              Cross-layer integration across genomics, transcriptomics, proteomics, metabolomics, across tissues and platforms with clinical phenotypes. Our science is built on the largest proteomic, metabolomics and transcriptomics datasets.
            </Card>
            <Card title="Explainable AI">
              Robust learning and causal reasoning to improve generalization and interpretability for research and clinical use. Our current agent AI and platform have been implemented in proteomic data to identify a protein panel that can quantify brain co-pathologies across the four major neurodegenerative diseases (Alzheimer’s, Parkinson's, Frontotemporal Dementia (FTD), and Dementia with Lewy bodies (DLB)) <Citation id={1} />
            </Card>
            <Card title="Validation by Design">
              Proprietary pipelines that integrate quantitative omics data with genetics with Mendelian Randomization, colocalization and LLMs to identify causal targets and for drug repositioning.
            </Card>
          </div>
        </Section>

        <Section id="technology" title="Technology & Platform">
          <div className="grid two">
            <Card title="Data Platform">
              Secure data governance across centers, batch-effect mitigation, feature prioritization, and cross-assay alignment.
            </Card>
            <Card title="Model Platform">
              Classification, time-to-event (Cox), and causal discovery with transparent visual explanations and exportable reports.
            </Card>
          </div>
        </Section>

        <Section id="solutions" title="Solutions">
          <div className="grid three">
            <Card title="Early Screening">Fluid-biomarker–based risk prediction and stratification.</Card>
            <Card title="Clinical Trials">Enrollment/stratification optimization and surrogate endpoint exploration.</Card>
            <Card title="Target Discovery">From molecules to pathways for mechanism hypotheses and prioritization.</Card>
          </div>
        </Section>

        <Section id="team" title="Team">
          <p>
            We bring together expertise in computational biology, neuroscience, software engineering, and artifical intelligence.
          </p>
          <ul className="list">
            <li>CEO & Scientific Lead — Dr. Carlos Cruchaga</li>
            <li>CSO & Head of AI — Fiona Xu</li>
            {/* <li>Clinical Advisor — Dr. Carlos Cruchaga</li> */}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p>We welcome research and business partnerships.</p>
          <p>
            Email: <a href="cruchagac@wustl.edu">cruchagac@wustl.edu</a><br />
            Location: Global / Remote
          </p>
        </Section>

        <Section id="references" title="References">
          <ol className="references">
            <li id="ref-1">
              Xu Y, Western D, Heo G, <i>et&nbsp;al.</i>{" "}
              <strong>
                Protein-based diagnosis and analysis of co-pathologies across neurodegenerative diseases:
                large-scale AI-boosted CSF and plasma classification.
              </strong>{" "}
              <i>medRxiv</i>. 2025; doi:&nbsp;
              <a
                href="https://doi.org/10.1101/2025.07.09.25331192"
                target="_blank"
                rel="noopener noreferrer"
              >
                10.1101/2025.07.09.25331192
              </a>
              .
            </li>
          </ol>
        </Section>


      </main>

      <Footer />
    </>
  )
}

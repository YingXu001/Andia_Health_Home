import Nav from './components/Nav'
import Hero from './components/Hero'
import Section from './components/Section'
import Card from './components/Card'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />

      <main className="container">
        {/* <Section id="about" title="About Main Site"> */}
        <Section id="about" title="About Andia Health">
          <p className="lead">
            We integrate <strong>multi-omics</strong> with <strong>artificial intelligence</strong> to advance
            biomarker discovery, early risk stratification, and clinical decision support — with scientific rigor
            and engineering excellence.
          </p>
          <div className="grid">
            <Card title="Multi-omics Integration">
              Cross-layer integration across genomics, transcriptomics, proteomics, metabolomics, and clinical phenotypes.
            </Card>
            <Card title="Explainable AI">
              Robust learning and causal reasoning to improve generalization and interpretability for research and clinical use.
            </Card>
            <Card title="Validation by Design">
              Multi-cohort cross-validation, fixed/random-effects meta-analysis, and multiple testing control (e.g., BH).
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
      </main>

      <Footer />
    </>
  )
}
